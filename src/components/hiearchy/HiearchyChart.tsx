"use client";
import React, { useEffect, useRef, useState } from "react";

// Helper function to calculate positions and dimensions for nodes and connectors
const calculatePositions = (data, depth = 0, siblingIndex = 0, siblingsCount = 1) => {
    const nodeWidth = 250;
    const nodeHeight = 80;
    const horizontalSpacing = 80; // Increased for better spacing
    const verticalSpacing = 150;  // Increased for clearer vertical separation

    // Calculate x, y positions based on depth and sibling index
    const x = siblingIndex * (nodeWidth + horizontalSpacing) - ((siblingsCount - 1) * (nodeWidth + horizontalSpacing)) / 2;
    const y = depth * (nodeHeight + verticalSpacing);

    // Recursively calculate positions for children
    const children = data.children?.map((child, index) =>
        calculatePositions(child, depth + 1, index, data.children.length)
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
const HierarchyChart = ({ data }) => {
    const [layout, setLayout] = useState(null);
    const svgRef = useRef(null);

    // Calculate layout on mount or when data changes
    useEffect(() => {
        if (data) {
            const positionedData = calculatePositions(data);
            setLayout(positionedData);
        }
    }, [data]);

    // Calculate SVG dimensions
    const getSvgDimensions = (node) => {
        if (!node) return { width: 0, height: 0, minX: 0, maxX: 0, maxY: 0 };

        let minX = node.x;
        let maxX = node.x + node.width;
        let maxY = node.y + node.height;

        node.children.forEach((child) => {
            const childDims = getSvgDimensions(child);
            minX = Math.min(minX, childDims.minX);
            maxX = Math.max(maxX, childDims.maxX);
            maxY = Math.max(maxY, childDims.maxY);
        });

        return {
            width: maxX - minX,
            height: maxY,
            minX,
            maxX,
            maxY,
        };
    };

    // Determine background color based on hierarchy depth
    const getBackgroundColor = (depth) => {
        const colors = [
            "#F5F5F5", // Level 0 (Governing Council) - Light gray
            "#FFF3E0", // Level 1 (Academic Board, Audit Committee) - Light orange
            "#FFE0B2", // Level 2 (Learning & Teaching, Course Advisory) - Slightly darker orange
        ];
        return colors[depth] || "#FFE0B2"; // Default to the last color for deeper levels
    };

    // Render a single node and its connectors
    const renderNode = (node) => {
        if (!node) return null;

        const nodeStyle = {
            transform: `translate(${node.x}px, ${node.y}px)`,
        };

        return (
            <g key={`${node.title}-${node.subTitle}`}>
                {/* Node Box */}
                <foreignObject width={node.width} height={node.height} style={nodeStyle}>
                    <div
                        className="border border-[#606060] rounded-md p-3 flex flex-col justify-between items-center text-center w-full h-full"
                        style={{ backgroundColor: getBackgroundColor(node.depth) }}
                    >
                        <h4 className="text-[14px] font-medium text-[#606060] leading-tight">{node.title}</h4>
                        {node.subTitle && (
                            <p className="text-[12px] text-[#606060] mt-1 line-clamp-3">{node.subTitle}</p>
                        )}
                    </div>
                </foreignObject>

                {/* Connectors to Children */}
                {node.children?.length > 0 && (
                    <>
                        {/* Vertical line down from parent */}
                        <line
                            x1={node.x + node.width / 2}
                            y1={node.y + node.height}
                            x2={node.x + node.width / 2}
                            y2={node.y + node.height + 30}
                            stroke="#606060"
                            strokeWidth="1"
                        />
                        {/* Horizontal line connecting children */}
                        {node.children.length > 1 && (
                            <line
                                x1={node.children[0].x + node.children[0].width / 2}
                                y1={node.y + node.height + 30}
                                x2={node.children[node.children.length - 1].x + node.children[node.children.length - 1].width / 2}
                                y2={node.y + node.height + 30}
                                stroke="#606060"
                                strokeWidth="1"
                            />
                        )}
                        {/* Vertical lines up to each child */}
                        {node.children.map((child, index) => {
                            const childX = child.x + child.width / 2;
                            const childY = child.y;

                            return (
                                <g key={`connector-${node.title}-${child.title}-${index}`}>
                                    <line
                                        x1={childX}
                                        y1={node.y + node.height + 30}
                                        x2={childX}
                                        y2={childY}
                                        stroke="#606060"
                                        strokeWidth="1"
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
