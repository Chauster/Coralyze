const crypto = require('crypto');
const User = require('../models/user.model');
const sendEmail = require('../utilities/sendEmail');
const ErrorResponse = require('../utilities/errorResponse');
const { Mongoose } = require('mongoose');

// AUTHENTICATION SECTION
exports.register = async (req, res, next) => {
  const { username, password, email, chart_data, device_data } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        error: 'User already exists, please login or reset your password',
        response: 'failed'
      });
    }
    const user = await User.create({
      username,
      password,
      email,
      chart_data,
      device_data,
    });
    sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { username, password, token } = req.body;

  if (!username || !password) {
    res.status(400).json({
      success: false,
      error: 'Please enter your username and password',
    });
  }

  try {
    const user = await User.findOne({ username }).select('+password');

    if (!user) {
      res.status(400).json({
        success: false,
        error: 'Incorrect username/password – Please check and retry',
      });
    }

    const isMatched = await user.matchPasswords(password);

    if (!isMatched) {
      res.status(404).json({
        success: false,
        error: 'Incorrect username/password – Please check and retry',
      });
    }
    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.forgotpassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      next('Email could not be sent', 404);
    }

    const resetToken = user.getResetPasswordToken();

    await user.save();

    const resetURL = `http://coralyze.com/resetpassword/${resetToken}`;

    const message = `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
            <head>
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
              <meta http-equiv="X-UA-Compatible" content="IE=Edge">
              <style type="text/css">
            body, p, div {
              font-family: inherit;
              font-size: 14px;
            }
            body {
              color: #000000;
            }
            body a {
              color: #1188E6;
              text-decoration: none;
            }
            p { margin: 0; padding: 0; }
            table.wrapper {
              width:100% !important;
              table-layout: fixed;
              -webkit-font-smoothing: antialiased;
              -webkit-text-size-adjust: 100%;
              -moz-text-size-adjust: 100%;
              -ms-text-size-adjust: 100%;
            }
            img.max-width {
              max-width: 100% !important;
            }
            .column.of-2 {
              width: 50%;
            }
            .column.of-3 {
              width: 33.333%;
            }
            .column.of-4 {
              width: 25%;
            }
            ul ul ul ul  {
              list-style-type: disc !important;
            }
            ol ol {
              list-style-type: lower-roman !important;
            }
            ol ol ol {
              list-style-type: lower-latin !important;
            }
            ol ol ol ol {
              list-style-type: decimal !important;
            }
            @media screen and (max-width:480px) {
              .preheader .rightColumnContent,
              .footer .rightColumnContent {
                text-align: left !important;
              }
              .preheader .rightColumnContent div,
              .preheader .rightColumnContent span,
              .footer .rightColumnContent div,
              .footer .rightColumnContent span {
                text-align: left !important;
              }
              .preheader .rightColumnContent,
              .preheader .leftColumnContent {
                font-size: 80% !important;
                padding: 5px 0;
              }
              table.wrapper-mobile {
                width: 100% !important;
                table-layout: fixed;
              }
              img.max-width {
                height: auto !important;
                max-width: 100% !important;
              }
              a.bulletproof-button {
                display: block !important;
                width: auto !important;
                font-size: 80%;
                padding-left: 0 !important;
                padding-right: 0 !important;
              }
              .columns {
                width: 100% !important;
              }
              .column {
                display: block !important;
                width: 100% !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
              }
              .social-icon-column {
                display: inline-block !important;
              }
            }
          </style>
              <!--user entered Head Start--><link href="https://fonts.googleapis.com/css?family=Chivo&display=swap" rel="stylesheet"><style>
        body {font-family: 'Chivo', sans-serif;}
        </style><!--End Head user entered-->
            </head>
            <body>
              <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color:#FFFFFF;">
                <div class="webkit">
                  <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
                    <tr>
                      <td valign="top" bgcolor="#FFFFFF" width="100%">
                        <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                          <tr>
                            <td width="100%">
                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td>
                                    <!--[if mso]>
            <center>
            <table><tr><td width="600">
          <![endif]-->
                                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                              <tr>
                                                <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
            <tr>
              <td role="module-content">
                <p></p>
              </td>
            </tr>
          </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7a8a420f-bc0f-4307-bd09-412a5ff00998.1">
            <tbody>
              <tr>
                <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
                  <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" width="1362" height="70" alt="" data-proportionally-constrained="false" data-responsive="false" src="http://cdn.mcauto-images-production.sendgrid.net/12b1748bd2589e5a/ba2fbdc3-9e99-42ca-b2fc-0d614d167cf1/1381x382.png">
                </td>
              </tr>
            </tbody>
          </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:50px 0px 0px 30px;" bgcolor="#3e74ff" data-distribution="1">
            <tbody>
              <tr role="module-content">
                <td height="100%" valign="top"><table width="550" style="width:550px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
              <tbody>
                <tr>
                  <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="550f2fb7-70c1-463b-9758-84b6d731ca56">
            <tbody>
              <tr>
                <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="left">
                  <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:20% !important; width:20%; height:auto !important;" width="110" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/12b1748bd2589e5a/6cbd2f6b-133c-42e3-8948-0e1d34232ac5/1024x1024.png">
                </td>
              </tr>
            </tbody>
          </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="d8a6da06-629b-4b1f-a750-84744e679927">
            <tbody>
              <tr>
                <td style="padding:0px 0px 20px 0px;" role="module-content" bgcolor="">
                </td>
              </tr>
            </tbody>
          </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b16a4afb-f245-4156-968e-8080176990ea" data-mc-module-version="2019-10-22">
            <tbody>
              <tr>
                <td style="padding:18px 40px 0px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 24px; color: #ffffff">We received a request to reset your Coralyze account password.</span></div><div></div></div></td>
              </tr>
            </tbody>
          </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b16a4afb-f245-4156-968e-8080176990ea.1" data-mc-module-version="2019-10-22">
            <tbody>
              <tr>
                <td style="padding:18px 40px 10px 0px; line-height:18px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="color: #ffffff"><strong>Protecting your data is important to us.</strong></span></div>
        <div style="font-family: inherit; text-align: inherit"><span style="color: #ffffff"><strong>Please click on the button below to begin.</strong></span></div><div></div></div></td>
              </tr>
            </tbody>
          </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="c97177b8-c172-4c4b-b5bd-7604cde23e3f">
            <tbody>
              <tr>
                <td style="padding:0px 0px 10px 0px;" role="module-content" bgcolor="">
                </td>
              </tr>
            </tbody>
          </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="9c7ac938-a540-4353-9fec-543b193bf7da">
              <tbody>
                <tr>
                  <td align="left" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;">
                    <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
                      <tbody>
                        <tr>
                        <td align="center" bgcolor="#ffffff" class="inner-td" style="border-radius:6px; font-size:16px; text-align:left; background-color:inherit;">
                          <a href=${resetURL} style="background-color:#ffffff; border:1px solid #5b6dfb; border-color:#5b6dfb; border-radius:0px; border-width:1px; color:#000000; display:inline-block; font-size:14px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:12px 50px 12px 50px; text-align:center; text-decoration:none; border-style:solid; font-family:inherit;" target="_blank">Reset Password</a>
                          <br>
                          <br>
                          <p>If the above link did not work, please click the link below</p>
                          <a href=${resetURL} clicktracking=off>${resetURL}</a>
                        </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="c97177b8-c172-4c4b-b5bd-7604cde23e3f.1">
            <tbody>
              <tr>
                <td style="padding:0px 0px 60px 0px;" role="module-content" bgcolor="">
                </td>
              </tr>
            </tbody>
          </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b16a4afb-f245-4156-968e-8080176990ea.1.1" data-mc-module-version="2019-10-22">
            <tbody>
              <tr>
                <td style="padding:18px 40px 10px 0px; line-height:18px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="color: #ffffff">If you did not request a password change, please contact us</span></div>
        <div style="font-family: inherit; text-align: inherit"><span style="color: #ffffff">IMMEDIATELY so we can keep your account secure.<br>
        </span></div>
        <div style="font-family: inherit; text-align: inherit"><br></div>
        <div style="font-family: inherit; text-align: inherit"><span style="color: #ffffff">Use our website &nbsp;</span><a href="http://www.coralyze.com/contact"><span style="color: #ffffff"><strong>www.coralyze.com</strong></span></a><span style="color: #ffffff"><strong>/contact</strong></span><span style="color: #ff0000"> </span><span style="color: #ffffff">and fill out the form</span></div>
        <div style="font-family: inherit; text-align: inherit"><br></div>
        <div style="font-family: inherit; text-align: inherit"><span style="color: #ffffff">or Email us at INJECT-DevOps@outlook.com</span></div><div></div></div></td>
              </tr>
            </tbody>
          </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="c97177b8-c172-4c4b-b5bd-7604cde23e3f.1.1">
            <tbody>
              <tr>
                <td style="padding:0px 0px 80px 0px;" role="module-content" bgcolor="">
                </td>
              </tr>
            </tbody>
          </table></td>
                </tr>
              </tbody>
            </table></td>
              </tr>
            </tbody>
          </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7a8a420f-bc0f-4307-bd09-412a5ff00998">
            <tbody>
              <tr>
                <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
                  <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" width="1362" alt="" data-proportionally-constrained="false" data-responsive="false" src="http://cdn.mcauto-images-production.sendgrid.net/12b1748bd2589e5a/ba2fbdc3-9e99-42ca-b2fc-0d614d167cf1/1381x382.png" height="70">
                </td>
              </tr>
            </tbody>
          </table><div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5"><div class="Unsubscribe--addressLine"><p class="Unsubscribe--senderName" style="font-size:12px; line-height:20px;">Coralyze Team</p><p style="font-size:12px; line-height:20px;"><span class="Unsubscribe--senderAddress">33 Moore Street</span>, <span class="Unsubscribe--senderCity">Sydney</span>, <span class="Unsubscribe--senderState"></span>NSW<span class="Unsubscribe--senderZip">2170</span></p></div><p style="font-size:12px; line-height:20px;"><a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank" style=""></a></p></div><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="840a78da-be53-493f-8903-70244289fe77">
              <tbody>
                <tr>
                  <td align="center" bgcolor="" class="outer-td" style="padding:0px 0px 20px 0px;">
                    <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
                      <tbody>
                        <tr>
                        <td align="center" bgcolor="#f5f8fd" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;"><a href="https://sendgrid.com/" style="background-color:#f5f8fd; border:1px solid #f5f8fd; border-color:#f5f8fd; border-radius:25px; border-width:1px; color:#a8b9d5; display:inline-block; font-size:10px; font-weight:normal; letter-spacing:0px; line-height:normal; padding:5px 18px 5px 18px; text-align:center; text-decoration:none; border-style:solid; font-family:helvetica,sans-serif;" target="_blank"></a></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table></td>
                                              </tr>
                                            </table>
                                            <!--[if mso]>
                                          </td>
                                        </tr>
                                      </table>
                                    </center>
                                    <![endif]-->
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              </center>
            </body>
          </html>

        `;
    try {
      await sendEmail({
        to: user.email,
        subject: 'Reset Password Request',
        text: message,
      });

      res.status(200).json({
        success: true,
        data: 'Email sent',
      });
    } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(error, 500);
    }
  } catch (error) {
    next(error);
  }
};

exports.resetpassword = async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resetToken)
    .digest('hex');

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse('Invalid Token', 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: 'Password Updated Successfully',
      token: user.getJWTSignedToken(),
    });
  } catch (error) {
    next(error);
  }
};

exports.clientID = async (req, res, next) => {
  const { username } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      next('Username not found', 404);
    }

    sendClientID(user, 200, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// CHART RELATED SECTION
exports.insertDefaultChartData = async (req, res, next) => {
  const { username } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            male: 0,
            female: 0,
            month: 'JAN',
            detections: 0,
          },
        },
      }
    );
    const graphtwo = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            male: 0,
            female: 0,
            month: 'FEB',
            detections: 0,
          },
        },
      }
    );
    const graphthree = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            male: 0,
            female: 0,
            month: 'MAR',
            detections: 0,
          },
        },
      }
    );
    const graphfour = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            male: 0,
            female: 0,
            month: 'APR',
            detections: 0,
          },
        },
      }
    );
    const graphfive = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            male: 0,
            female: 0,
            month: 'MAY',
            detections: 0,
          },
        },
      }
    );
    const graphsix = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            male: 0,
            female: 0,
            month: 'JUN',
            detections: 0,
          },
        },
      }
    );
    const graphseven = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            male: 0,
            female: 0,
            month: 'JUL',
            detections: 0,
          },
        },
      }
    );
    const grapheight = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            male: 0,
            female: 0,
            month: 'AUG',
            detections: 0,
          },
        },
      }
    );
    const graphnine = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            male: 0,
            female: 0,
            month: 'SEP',
            detections: 0,
          },
        },
      }
    );
    const graphten = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            male: 0,
            female: 0,
            month: 'OCT',
            detections: 0,
          },
        },
      }
    );
    const grapheleven = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            male: 0,
            female: 0,
            month: 'NOV',
            detections: 0,
          },
        },
      }
    );
    const graphtwelve = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            male: 0,
            female: 0,
            month: 'DEC',
            detections: 0,
          },
        },
      }
    );
    const graphthirteen = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            agegroup: '0-10yr',
            detections: 0,
          },
        },
      }
    );
    const graphfourteen = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            agegroup: '11-20yr',
            detections: 0,
          },
        },
      }
    );
    const graphfifteen = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            agegroup: '21-40yr',
            detections: 0,
          },
        },
      }
    );
    const graphsixteen = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            agegroup: '41-60yr',
            detections: 0,
          },
        },
      }
    );
    const graphseventeen = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            agegroup: '61-70yr',
            detections: 0,
          },
        },
      }
    );
    const grapheightteen = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            agegroup: '70+yr',
            detections: 0,
          },
        },
      }
    );
    const graphnineteen = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            gender: 'Male',
            detections: 0,
          },
        },
      }
    );
    const graphtwenty = await User.findOneAndUpdate(
      { username },
      {
        $push: {
          chart_data: {
            gender: 'Female',
            detections: 0,
          },
        },
      }
    );
    sendClientID(user, 200, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
exports.getchartdata = async (req, res, next) => {
  const { _id } = req.body;
  try {
    const chart_records = await User.findOne({ _id }); // currently checks the id of the user, fetches all chart_data related to that user
    if (!chart_records) {
      next('User not found', 400);
    }
    sendChartData(chart_records, 200, res);
  } catch (error) {
    next(error);
  }
};

// DEVICE RELATED SECTION
exports.addDevice = async (req, res, next) => {
  const { _id, device_name, device_ip } = req.body;

  try {
    const devicedata = await User.findOneAndUpdate(
      { _id },
      {
        $push: {
          device_data: {
            name: device_name,
            ip_add: device_ip,
          },
        },
      }
    );
    if (!devicedata) {
      res.status(400).json({
        success: false,
        error: 'Could not find user',
      });
    }
    sendResponse(devicedata, 200, res);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getdevicedata = async (req, res, next) => {
  const { _id } = req.body;
  try {
    const device_records = await User.findOne({ _id }); // currently checks the id of the user, fetches all device_data related to that user
    if (!device_records) {
      next('User not found', 400);
    }
    sendDeviceData(device_records, 200, res);
  } catch (error) {
    next(error);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTSignedToken(); // Encodes token based on the passed in data
  res.status(statusCode).json({ success: true, token }); // Checks whether the token has been encoded successfully
};

const sendClientID = (user, statusCode, res) => {
  // To send client ID to the frontend
  const clientID = user.getUserId();
  res.status(statusCode).json({ success: true, clientID });
};

const sendChartData = (user, statusCode, res) => {
  // To send chart data to the frontend
  const chartData = user.getDashboardData();
  res.status(statusCode).json({ success: true, chartData });
};

const sendDeviceData = (user, statusCode, res) => {
  // To send device data to the frontend
  const deviceData = user.getDeviceData();
  res.status(statusCode).json({ success: true, deviceData });
};

const sendResponse = (user, statusCode, res) => {
  // General success response
  const message = 'Response was successful';
  res.status(statusCode).json({ success: true, message });
};
