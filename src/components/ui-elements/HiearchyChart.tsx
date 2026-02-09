"use client";
import { useEffect, useRef, useState } from "react";
interface HierarchyNode {
  title: string;
  subTitle?: string;
  children?: HierarchyNode[];
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  depth?: number;
}

// Props for HierarchyChart
interface HierarchyChartProps {
  data: HierarchyNode;
}

const calculatePositions = (
  data: HierarchyNode,
  depth = 0,
  siblingIndex = 0,
  siblingsCount = 1
): HierarchyNode => {
  const nodeWidth = 250;
  const nodeHeight = 80;
  const horizontalSpacing = 80; // Increased for better spacing
  const verticalSpacing = 150; // Increased for clearer vertical separation

  // Calculate x, y positions based on depth and sibling index
  const x =
    siblingIndex * (nodeWidth + horizontalSpacing) -
    ((siblingsCount - 1) * (nodeWidth + horizontalSpacing)) / 2;
  const y = depth * (nodeHeight + verticalSpacing);

  // Recursively calculate positions for children
  const children =
    data.children?.map((child, index) =>
      calculatePositions(child, depth + 1, index, data.children!.length)
    ) || [];
  return {
    ...data,
    x,
    y,
    width: nodeWidth,
    height: nodeHeight,
    children,
    depth, // Store depth for color assignment
  };
};

// Component to render the hierarchy chart
const HierarchyChart: React.FC<HierarchyChartProps> = ({ data }) => {
  const [layout, setLayout] = useState<HierarchyNode | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Calculate layout on mount or when data changes
  useEffect(() => {
    if (data) {
      const positionedData = calculatePositions(data);
      setLayout(positionedData);
    }
  }, [data]);

  const getSvgDimensions = (
    node: HierarchyNode
  ): {
    width: number;
    height: number;
    minX: number;
    maxX: number;
    maxY: number;
  } => {
    let minX = node.x || 0;
    let maxX = (node.x || 0) + (node.width || 0);
    let maxY = (node.y || 0) + (node.height || 0);

    node.children?.forEach((child) => {
      const childDims = getSvgDimensions(child);
      minX = Math.min(minX, childDims.minX);
      maxX = Math.max(maxX, childDims.maxX);
      maxY = Math.max(maxY, childDims.maxY);
    });

    return { width: maxX - minX, height: maxY, minX, maxX, maxY };
  };

  // Determine background color based on hierarchy depth
  const getBackgroundColor = (depth: number | undefined) => {
    const colors = [
      "#F5F5F5", // Level 0 (Governing Council) - Light gray
      "#FFF3E0", // Level 1 (Academic Board, Audit Committee) - Light orange
      "#FFE0B2", // Level 2 (Learning & Teaching, Course Advisory) - Slightly darker orange
    ];
    return depth !== undefined ? colors[depth] || "#FFE0B2" : "#FFE0B2"; // Default to the last color for deeper levels
  };

  // Render a single node and its connectors

  const renderNode = (node: HierarchyNode) => {
    if (!node) return null;

    const nodeStyle = {
      transform: `translate(${node.x}px, ${node.y}px)`,
    };

    return (
      <g key={`${node.title}-${node.subTitle}`}>
        {/* Node Box */}
        <foreignObject
          width={node.width}
          height={node.height}
          style={nodeStyle}
        >
          <div
            className="border border-[#606060] rounded-md p-3 flex flex-col justify-between items-center text-center w-full h-full"
            style={{ backgroundColor: getBackgroundColor(node.depth) }}
          >
            <h4 className="text-[14px] font-medium text-[#606060] leading-tight">
              {node.title}
            </h4>
            {node.subTitle && (
              <p className="text-[12px] text-[#606060] mt-1 line-clamp-3">
                {node.subTitle}
              </p>
            )}
          </div>
        </foreignObject>

        {/* Connectors to Children */}
        {(node.children?.length ?? 0) > 0 && (
          <>
            {/* Vertical line down from parent */}
            <line
              x1={(node.x ?? 0) + (node.width ?? 0) / 2}
              y1={(node.y ?? 0) + (node.height ?? 0)}
              x2={(node.x ?? 0) + (node.width ?? 0) / 2}
              y2={(node.y ?? 0) + (node.height ?? 0) + 30}
              stroke="#606060"
              strokeWidth={1}
            />

            {/* Horizontal line connecting children */}
            {node.children && node.children.length > 1 && (
              <line
                x1={
                  (node.children[0].x ?? 0) + (node.children[0].width ?? 0) / 2
                }
                y1={(node.y ?? 0) + (node.height ?? 0) + 30}
                x2={
                  (node.children[node.children.length - 1].x ?? 0) +
                  (node.children[node.children.length - 1].width ?? 0) / 2
                }
                y2={(node.y ?? 0) + (node.height ?? 0) + 30}
                stroke="#606060"
                strokeWidth={1}
              />
            )}

            {/* Vertical lines up to each child */}
            {node.children?.map((child, index) => {
              const childX = (child.x ?? 0) + (child.width ?? 0) / 2;
              const childY = child.y ?? 0;

              return (
                <g key={`connector-${node.title}-${child.title}-${index}`}>
                  <line
                    x1={childX}
                    y1={(node.y ?? 0) + (node.height ?? 0) + 30}
                    x2={childX}
                    y2={childY}
                    stroke="#606060"
                    strokeWidth={1}
                  />
                  {renderNode(child)}
                </g>
              );
            })}
          </>
        )}
      </g>
    );
  };

  if (!layout) return <div>Loading hierarchy...</div>;

  const { width, height, minX, maxX, maxY } = getSvgDimensions(layout);

  return (
    <div className="w-full overflow-x-auto p-6 bg-white">
      <svg
        ref={svgRef}
        width={width + 100}
        height={height + 50}
        viewBox={`${minX - 50} 0 ${width + 100} ${maxY + 50}`}
        className="min-w-[600px]"
      >
        <g transform="translate(50, 0)">{renderNode(layout)}</g>
      </svg>
    </div>
  );
};

export default HierarchyChart;
