import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const {
      identity,
      firstName,
      lastName,
      email,
      verifyEmail,
      incidentDate,
      incidentTime,
      isOngoing,
      incidentSeverity,
      incidentDescription,
      otherIncidentType,
      reportingAbout,
      osUsed,
      browserUsed,
      deviceUsed,
      incidentType,
      impacted,
      attachedFiles: attachments, // Changed to 'attachments' (plural) for clarity
    } = await req.json();

    let transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    // Prepare mail options
    let mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: "cyberincident@churchill.nsw.edu.au",
      cc: "cyberincidents@churchill.nsw.edu.au",
      subject: `Cyber Incident Report by ${firstName} ${lastName}`, // Fixed the subject string
      html: `
<table
  cellpadding="0"
  cellspacing="0"
  id="m_6364923093846910505contentOuter"
  style="
    width: 100%;
    border: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: #111;
    font-size: 13px;
    border-collapse: collapse;
    letter-spacing: normal;
    background-color: #f0f0f0;
    background-image: url();
  "
  width="100%"
>
  <tbody>
    <tr>
      <td
        align="center"
        style="border: 0; padding-top: 10px; padding-bottom: 20px"
      >
        <table
          cellpadding="0"
          cellspacing="0"
          id="m_6364923093846910505contentInner"
          style="
            width: 600px;
            border: 0;
            border-collapse: collapse;
            table-layout: fixed;
            background-color: #fff;
          "
          width="600px"
        >
          <tbody>
            <tr>
              <td
                style="border: 0; word-wrap: break-word; word-break: break-word"
                valign="top"
              >
                <div id="m_6364923093846910505page-container">
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      min-width: 100%;
                      max-width: 100%;
                      table-layout: fixed;
                      border: 0;
                      border-collapse: collapse;
                    "
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td style="border: 0" valign="top">
                          <div>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                min-width: 100%;
                                max-width: 100%;
                                table-layout: fixed;
                                border: 0;
                                border-collapse: collapse;
                                background-color: rgba(0, 0, 0, 0);
                              "
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      word-wrap: break-word;
                                      word-break: break-word;
                                      border: 0;
                                      padding: 0 0;
                                      border-top: 0 none #111;
                                      border-bottom: 0 none #111;
                                    "
                                  >
                                    <p
                                      style="width: 100%; padding: 0; margin: 0"
                                    >
                                      <img
                                        alt=""
                                        height="112.812"
                                        src="https://ik.imagekit.io/z6yqvf1sq/top-incidentbanner.jpg?updatedAt=1728020381657"
                                        style="
                                          width: 100%;
                                          max-width: 100%;
                                          vertical-align: top;
                                          display: block;
                                        "
                                        width="600"
                                        class="CToWUd a6T"
                                        data-bit="iit"
                                        tabindex="0"
                                      />
                                      <div
                                        class="a6S"
                                        dir="ltr"
                                        style="
                                          opacity: 0.01;
                                          left: 601.5px;
                                          top: 87px;
                                        "
                                      >
                                        <span
                                          data-is-tooltip-wrapper="true"
                                          class="a5q"
                                          jsaction="JIbuQc:.CLIENT"
                                          ><button
                                            class="VYBDae-JX-I VYBDae-JX-I-ql-ay5-ays CgzRE"
                                            jscontroller="PIVayb"
                                            jsaction="click:h5M12e; clickmod:h5M12e;pointerdown:FEiYhc;pointerup:mF5Elf;pointerenter:EX0mI;pointerleave:vpvbp;pointercancel:xyn4sd;contextmenu:xexox;focus:h06R8; blur:zjh6rb;mlnRJb:fLiPzd;"
                                            data-idom-class="CgzRE"
                                            jsname="hRZeKc"
                                            aria-label="Download attachment "
                                            data-tooltip-enabled="true"
                                            data-tooltip-id="tt-c21"
                                            data-tooltip-classes="AZPksf"
                                            id=""
                                            jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTgxMDU2MDkzNDgxNjc3NzczMyJd; 43:WyJpbWFnZS9qcGVnIl0."
                                          >
                                            <span
                                              class="OiePBf-zPjgPe VYBDae-JX-UHGRz"
                                            ></span
                                            ><span
                                              class="bHC-Q"
                                              jscontroller="LBaJxb"
                                              jsname="m9ZlFb"
                                              soy-skip=""
                                              ssk="6:RWVI5c"
                                            ></span
                                            ><span
                                              class="VYBDae-JX-ank-Rtc0Jf"
                                              jsname="S5tZuc"
                                              aria-hidden="true"
                                              ><span
                                                class="bzc-ank"
                                                aria-hidden="true"
                                                ><svg
                                                  viewBox="0 -960 960 960"
                                                  height="20"
                                                  width="20"
                                                  focusable="false"
                                                  class="aoH"
                                                >
                                                  <path
                                                    d="M480-336L288-528l51-51L444-474V-816h72v342L621-579l51,51L480-336ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72H696v-72h72v72q0,29.7-21.16,50.85T695.96-192H263.72Z"
                                                  ></path></svg></span
                                            ></span>
                                            <div class="VYBDae-JX-ano"></div>
                                          </button>
                                          <div
                                            class="ne2Ple-oshW8e-J9"
                                            id="tt-c21"
                                            role="tooltip"
                                            aria-hidden="true"
                                          >
                                            Download
                                          </div></span
                                        >
                                      </div>
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 0" valign="top">
                          <div>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                font-size: 13px;
                                letter-spacing: normal;
                                font-family: Arial, Helvetica, sans-serif;
                                min-width: 100%;
                                max-width: 100%;
                                table-layout: fixed;
                                border: 0;
                                border-collapse: collapse;
                                background-color: rgba(0, 0, 0, 0);
                              "
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      word-wrap: break-word;
                                      word-break: break-word;
                                      border: 0;
                                      padding: 6px 16px;
                                      border-top: 0 none #111;
                                      border-bottom: 0 none #111;
                                      font-family: Arial, Helvetica, sans-serif;
                                    "
                                  >
                                  <p style="padding: 0; margin: 0">
                                    <font size="2">Hi Team,</font>
                                  </p>
                                  <p style="padding: 0; margin: 0">
                                    <font size="2"><br /></font>
                                  </p>
                                  <p style="padding: 0; margin: 0">
                                    <font size="2">Please be advised that the below detailed Major Cyber Incident is Reported:</font>
                                  </p>
                                  <p style="padding: 0; margin: 0">
                                    <font size="2"><br /></font>
                                  </p>
                                  <table border="0" cellpadding="10" cellspacing="0" width="100%" style="border: 2px solid #e59623; border-collapse: collapse; font-size: 14px;">
                                    <tr>
                                      <td style="padding: 0;">
                                        <table width="100%" border="0" cellpadding="5" cellspacing="0">
                                          <tr style="background: #ededeb;">
                                            <td style="border-bottom: 1px solid #e59623;"><strong>Identity</strong>:</td>
                                            <td style="border-bottom: 1px solid #e59623;">${identity}</td>
                                          </tr>
                                          <tr>
                                            <td style="border-bottom: 1px solid #e59623;"><strong>First Name</strong>:</td>
                                            <td style="border-bottom: 1px solid #e59623;">${firstName}</td>
                                          </tr>
                                          <tr style="background: #ededeb;">
                                            <td style="border-bottom: 1px solid #e59623;"><strong>Last Name</strong>:</td>
                                            <td style="border-bottom: 1px solid #e59623;">${lastName}</td>
                                          </tr>
                                          <tr>
                                            <td style="border-bottom: 1px solid #e59623;"><strong>Email</strong>:</td>
                                            <td style="border-bottom: 1px solid #e59623;">${email}</td>
                                          </tr>
                                          <tr>
                                            <td style="border-bottom: 1px solid #e59623;"><strong>Incident Date</strong>:</td>
                                            <td style="border-bottom: 1px solid #e59623;">${incidentDate}</td>
                                          </tr>
                                          <tr style="background: #ededeb;">
                                            <td style="border-bottom: 1px solid #e59623;"><strong>Incident Time</strong>:</td>
                                            <td style="border-bottom: 1px solid #e59623;">${incidentTime}</td>
                                          </tr>
                                          <tr>
                                            <td style="border-bottom: 1px solid #e59623;"><strong>Is Ongoing</strong>:</td>
                                            <td style="border-bottom: 1px solid #e59623;">${isOngoing}</td>
                                          </tr>
                                          <tr style="background: #ededeb;">
                                            <td style="border-bottom: 1px solid #e59623;"><strong>Incident Severity</strong>:</td>
                                            <td style="border-bottom: 1px solid #e59623;">${incidentSeverity}</td>
                                          </tr>
                                          <tr>
                                            <td style="border-bottom: 1px solid #e59623;"><strong>Incident Description</strong>:</td>
                                            <td style="border-bottom: 1px solid #e59623;">${incidentDescription}</td>
                                          </tr>
                                          <tr style="background: #ededeb;">
                                            <td style="border-bottom: 1px solid #e59623;"><strong>Other Incident Type</strong>:</td>
                                            <td style="border-bottom: 1px solid #e59623;">${otherIncidentType}</td>
                                          </tr>
                                          <tr>
                                            <td style="border-bottom: 1px solid #e59623;"><strong>Reporting About</strong>:</td>
                                            <td style="border-bottom: 1px solid #e59623;">${reportingAbout}</td>
                                          </tr>
                                          <tr style="background: #ededeb;">
                                            <td style="border-bottom: 1px solid #e59623;"><strong>OS Used</strong>:</td>
                                            <td style="border-bottom: 1px solid #e59623;">${osUsed}</td>
                                          </tr>
                                          <tr>
                                            <td style="border-bottom: 1px solid #e59623;"><strong>Browser Used</strong>:</td>
                                            <td style="border-bottom: 1px solid #e59623;">${browserUsed}</td>
                                          </tr>
                                          <tr style="background: #ededeb;">
                                            <td style="border-bottom: 1px solid #e59623;"><strong>Device Used</strong>:</td>
                                            <td style="border-bottom: 1px solid #e59623;">${deviceUsed}</td>
                                          </tr>
                                          <tr>
                                            <td style="border-bottom: 1px solid #e59623;"><strong>Incident Type</strong>:</td>
                                            <td style="border-bottom: 1px solid #e59623;">${incidentType.join(
                                              ", "
                                            )}</td>
                                          </tr>
                                          <tr style="background: #ededeb;">
                                            <td><strong>Impacted</strong>:</td>
                                            <td>${impacted.join(", ")}</td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                  <p style="padding: 0; margin: 0">
                                    <font size="2"><br /></font>
                                  </p>
                                  <p style="padding: 0; margin: 0">
                                    <font size="2">IT will co-ordinate with respective department how it can be resolved.
                                    </font>
                                  </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 0" valign="top">
                          <div>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                min-width: 100%;
                                max-width: 100%;
                                table-layout: fixed;
                                border: 0;
                                border-collapse: collapse;
                                background-color: rgba(0, 0, 0, 0);
                              "
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      height: 20px;
                                      border: 0;
                                      border-top: 0 none #111;
                                      border-bottom: 0 none #111;
                                    "
                                  >
                                    <p
                                      style="
                                        height: 20px;
                                        margin: 0;
                                        padding: 0;
                                      "
                                    ></p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="border: 0" valign="top">
                          <div>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                min-width: 100%;
                                max-width: 100%;
                                table-layout: fixed;
                                border: 0;
                                border-collapse: collapse;
                                background-color: rgba(0, 0, 0, 0);
                              "
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      height: 20px;
                                      border: 0;
                                      border-top: 0 none #111;
                                      border-bottom: 0 none #111;
                                    "
                                  >
                                    <p
                                      style="
                                        height: 20px;
                                        margin: 0;
                                        padding: 0;
                                      "
                                    ></p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>


                      <tr>
                        <td style="border: 0" valign="top">
                          <div>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style="
                                min-width: 100%;
                                max-width: 100%;
                                table-layout: fixed;
                                border: 0;
                                border-collapse: collapse;
                                background-color: rgba(0, 0, 0, 0);
                              "
                              width="100%"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    style="
                                      word-wrap: break-word;
                                      word-break: break-word;
                                      border: 0;
                                      padding: 0 0;
                                      border-top: 0 none #111;
                                      border-bottom: 0 none #111;
                                    "
                                  >
                                    <p
                                      style="width: 100%; padding: 0; margin: 0"
                                    >
                                      <img
                                        alt=""
                                        height="100%"
                                        src="https://ik.imagekit.io/z6yqvf1sq/bottom-incidentbanner.jpg?updatedAt=1728020381563"
                                        style="
                                          width: 100%;
                                          max-width: 100%;
                                          vertical-align: top;
                                          display: block;
                                        "
                                        width="600"
                                        class="CToWUd a6T"
                                        data-bit="iit"
                                        tabindex="0"
                                      />
                                      <div
                                        class="a6S"
                                        dir="ltr"
                                        style="
                                          opacity: 0.01;
                                          left: 601.5px;
                                          top: 87px;
                                        "
                                      >
                                        <span
                                          data-is-tooltip-wrapper="true"
                                          class="a5q"
                                          jsaction="JIbuQc:.CLIENT"
                                          ><button
                                            class="VYBDae-JX-I VYBDae-JX-I-ql-ay5-ays CgzRE"
                                            jscontroller="PIVayb"
                                            jsaction="click:h5M12e; clickmod:h5M12e;pointerdown:FEiYhc;pointerup:mF5Elf;pointerenter:EX0mI;pointerleave:vpvbp;pointercancel:xyn4sd;contextmenu:xexox;focus:h06R8; blur:zjh6rb;mlnRJb:fLiPzd;"
                                            data-idom-class="CgzRE"
                                            jsname="hRZeKc"
                                            aria-label="Download attachment "
                                            data-tooltip-enabled="true"
                                            data-tooltip-id="tt-c21"
                                            data-tooltip-classes="AZPksf"
                                            id=""
                                            jslog="91252; u014N:cOuCgd,Kr2w4b,xr6bB; 4:WyIjbXNnLWY6MTgxMDU2MDkzNDgxNjc3NzczMyJd; 43:WyJpbWFnZS9qcGVnIl0."
                                          >
                                            <span
                                              class="OiePBf-zPjgPe VYBDae-JX-UHGRz"
                                            ></span
                                            ><span
                                              class="bHC-Q"
                                              jscontroller="LBaJxb"
                                              jsname="m9ZlFb"
                                              soy-skip=""
                                              ssk="6:RWVI5c"
                                            ></span
                                            ><span
                                              class="VYBDae-JX-ank-Rtc0Jf"
                                              jsname="S5tZuc"
                                              aria-hidden="true"
                                              ><span
                                                class="bzc-ank"
                                                aria-hidden="true"
                                                ><svg
                                                  viewBox="0 -960 960 960"
                                                  height="20"
                                                  width="20"
                                                  focusable="false"
                                                  class="aoH"
                                                >
                                                  <path
                                                    d="M480-336L288-528l51-51L444-474V-816h72v342L621-579l51,51L480-336ZM263.72-192Q234-192 213-213.15T192-264v-72h72v72H696v-72h72v72q0,29.7-21.16,50.85T695.96-192H263.72Z"
                                                  ></path></svg></span
                                            ></span>
                                            <div class="VYBDae-JX-ano"></div>
                                          </button>
                                          <div
                                            class="ne2Ple-oshW8e-J9"
                                            id="tt-c21"
                                            role="tooltip"
                                            aria-hidden="true"
                                          >
                                            Download
                                          </div></span
                                        >
                                      </div>
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
      `,
      attachments:
        attachments &&
        attachments.map((attachment) => ({
          filename: attachment.name,
          content: Buffer.from(attachment.data, "base64"),
          contentType: attachment.type,
        })),
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
      console.log(err)
    );
  }
}
