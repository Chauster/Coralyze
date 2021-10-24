import React from 'react';
import './TechnicalSection.scss';
import { Link } from 'react-router-dom';
import register1 from '../../images/Documentation/register_1.PNG';
import register2 from '../../images/Documentation/register_2.PNG';
import login1 from '../../images/Documentation/Login_1.PNG';
import login2 from '../../images/Documentation/Login_2.PNG';
import changepassword1 from '../../images/Documentation/changepassword_1.png';
import resetpassword1 from '../../images/Documentation/resetpassword_1.PNG';
import resetpassword2 from '../../images/Documentation/resetpassword_3.PNG';
import resetpassword3 from '../../images/Documentation/resetpassword_2.PNG';
import dashboard1 from '../../images/Documentation/dashboard_1.PNG';
import dashboard2 from '../../images/Documentation/dashboard_2.png';
import deviceprep1 from '../../images/Documentation/deviceprep_1.png';
import deviceprep2 from '../../images/Documentation/deviceprep_2.jpg';
import image1 from '../../images/Documentation/tinker_edge_T_image1.jpg';
import image2 from '../../images/Documentation/tinker_edge_T_image2.jpg';
import image3 from '../../images/Documentation/tinker_edge_T_image3.jpg';
import image4 from '../../images/Documentation/tinker_edge_T_image4.jpg';
import image5 from '../../images/Documentation/tinker_edge_T_image5.jpg';
import image6 from '../../images/Documentation/tinker_edge_T_image6.jpg';

const TechnicalSection = () => {
  return (
    <div>
      <div class='technical'>
        {/* <h1>Coralyze technical documentation.</h1> */}
        <div class='technical__content' id='Introduction'>
          <h2>Introduction.</h2>
          <article>
            <p>
              Coralyze’ primary focus is to provide the user with a portable and
              affordable facial recognition software system through the means of
              using a TPU (tensor processing unit) device. In the case of INJECT
              DevOps project, the team was assigned a specific device known as
              ‘Tinker Edge T’, programmed with machine learning algorithms to
              effectively identify human gender and age based on certain facial
              features present on individuals. The idea is to allow the TPU
              device to be accessed through a web server (host device), to
              provide a simple interface to monitor and observe individuals in
              specific environments.
            </p>
          </article>
        </div>
        <div class='technical__content' id='QSG'>
          <h2>Quick Start Guide</h2>
          <article>
            <p>
              Welcome to Coralyze! Here's how to get started. To get started
              with Coralyze, we'll need to get it onto your IoT device.
            </p>
            <ul class='technical__ordered'>
              <a href='#Register'>
                <li>1. Creating your Coralyze account</li>
              </a>
              <a href='#Login'>
                <li>2. Logging into Coralyze dashboard</li>
              </a>
              <a href='#AddDevice'>
                <li>3. Adding an IoT Device</li>
              </a>
              <a href='#CoralyzePackages'>
                <li>4. Installing Coralyze Scripts</li>
              </a>
              <a href='#Introduction'>
                <li>5. Operating the Coralyze dashboard</li>
              </a>
            </ul>
          </article>
        </div>
        <div class='technical__content' id='DevicePrep'>
          <h2>Device Preparation</h2>
          <article>
            <h3>Tinker Edge R Guide</h3>
            <h4>Flashing the Tinker Edge R</h4>
            <p>
              ASUS Tinker Edge R is a Single Board Computer (SBC) specially
              designed for AI applications. It uses Rockchip NPU, a Machine
              Learning (ML) accelerator that speeds up processing efficiency,
              lowers power demands and makes it easier to build connected
              devices and intelligent applications. With this integrated Machine
              Learning (ML) accelerator, the Tinker Edge R is capable of
              performing 3 tera-operations per second (TOPS), using low power
              consumption. And it’s optimized for Neural Network (NN)
              architecture, which means Tinker Edge R can support multiple
              Machine Learning (ML) frameworks and common Machine Learning (ML)
              models can be easily compiled and run on the Tinker Edge R.
            </p>
            <h4>Requirements</h4>
            <ul class='technical__normal'>
              <li>
                1 x USB Type-C® cable with data transfer function (to connect
                your PC to the board’s data port)
              </li>
              <li>1 x 12~19V power supply*</li>
              <li>1 x Monitor with HDMI cable or USB Type-C® (DP) cable</li>
              <li>1 x Keyboard and Mouse set</li>
              <li>* The power supply is purchased separately.</li>
            </ul>
            <h4>Software pre-requisites guide</h4>
            <ul class='technical__normal'>
              <li>
                1. Get Tinker Edge R ROM Image Check ASUS Tinker Edge R official
                website to get the latest image.
                <br />
                <a
                  href='https://tinker-board.asus.com/download-list.html'
                  target='_blank'
                >
                  Click this link
                </a>
                , and select Tinker Edge R from the dropdown menu.{' '}
              </li>
              <li>
                2. Get Edge R Flash tool (Windows GUI version) Check ASUS Tinker
                Edge R official website to get the newest version.
                <br />
                <a
                  href='https://tinker-board.asus.com/download-list.html'
                  target='_blank'
                >
                  Click this link
                </a>
                , and select Tinker Edge R from the dropdown menu. From there
                select the latest Tinker Edge R Flash Tool (GUI)
              </li>
              <li>3. Get Edge R Flash tool (Windows/Linux Command line).</li>
              <li>
                4. Find the command line flash tool in the ROM image directory.
              </li>
              <li>5. [Windows] Install Rockchip Driver.</li>
              <li>
                6. Find the Driver Assistant zip package in the ROM image
                directory, unzip it and execute DriverInstall.exe to install the
                driver.
              </li>
            </ul>
            <h4>Initiating MASKROM mode</h4>
            <ul class='technical__normal'>
              <li>
                1. Connect the USB Type-C® cable to the USB Type-C® ports on the
                Tinker Edge R and your host computer.
              </li>
              <li>
                2. Before you begin the flashing procedure, please ensure of the
                following:
              </li>
              <ul class='technical__indent'>
                <li>
                  The board is completely powered off, and the power cord and
                  cables connecting the board to your computer are all
                  disconnected.
                </li>
                <li>
                  In order to set boot mode to MASKROM mode, use a metal object
                  or a jumper cap to short recovery header.
                </li>
              </ul>
              <li>
                3. Power on the Tinker Edge R board should automatically be
                booted into MASKROM mode.
              </li>
              <li>
                4. Remember to remove the jumper cap upon power on. Refer to the
                image below
              </li>
            </ul>
            <div class='technical__images'>
              <img src={deviceprep1} class='technical__images__large'></img>
            </div>
            <h4>Executing the flash tool</h4>
            <ul class='technical__normal'>
              <li>
                1. Download the OS image from the Tinker Edge R website, then
                unzip the image file.
              </li>
              <li>
                2. Run the GUI flash tool (Windows OS) or command line (Linux)
                to start up the flash process. The flash process should take a
                few minutes.
              </li>
              <li>
                3. Once flash is completed, Tinker board will be automatically
                rebooted.
              </li>
            </ul>
            <h5>A. Windows Flash tool (GUI)</h5>
            <ul class='technical__normal'>
              <li>
                1. Check Device Manager to ensure “Rockusb device” is detected.
                if problem encountered:
              </li>
              <ul class='technical__indent'>
                <li>
                  Try to reconnect cable directly to PC’s USB port without hub
                </li>
                <li>Short Recovery header then power on again</li>
                <li>Try to re-install Rockchip driver.</li>
              </ul>
              <li>
                2. Unzip GUI flash tool package, run Tinker-Flash-Tool.exe (Run
                as Administrator option)
              </li>
              <li>
                3. Follow the instruction, select OS image file, pick the target
                Tinker board and execute the flash.
              </li>
              <div class='technical__images'>
                <img src={deviceprep2} class='technical__images__small'></img>
              </div>
            </ul>
            <h5>B. Flash tool-command Line (Windows, Linux)</h5>
            <ul class='technical__normal'>
              <li>
                1. Make sure the Recovery header is no longer being shorted
                after power on.
              </li>
              <li>
                2. Run the flash script flash.cmd for Windows or flash.sh for
                Linux to start the flash process.
              </li>
              <li>3. Refer to README.txt for more information.</li>
            </ul>
            <h3>Downloading Software Packages</h3>
            <h4>Python</h4>
            <ul class='technical__normal'>
              <li>
                You must download Python 3.9.2 onto your Tinker Edge R device.
              </li>
              <li>
                Open a terminal on your device and copy and paste the following
                commands:
              </li>
              <ul class='technical__indent'>
                <li>sudo apt-get update</li>
                <li>sudo apt-get install python 3.9.2</li>
              </ul>
            </ul>
            <h4>Python Libraries</h4>
            <ul class='technical__normal'>
              <li>
                You must install Certifi and PyMongo python libraries onto your
                Tinker Edge R device.
              </li>
              <li>
                Open a terminal on your device and copy and paste the following
                commands (wait for each to install before running the next
                command):
              </li>
              <ul class='technical__indent'>
                <li>python -m pip install certifi</li>
                <li>python -m pip install pymongo</li>
                <li>python -m pip install pymongo[srv]</li>
                <li>python -m pip install pymongo[tls]</li>
              </ul>
            </ul>
            <h4>User Package</h4>
            <ul class='technical__normal'>
              <li>
                1. While logged into the website, navigate to the dashboard
                page.
              </li>
              <li>
                2. Click the ‘download packages’ button on the top of the page.
              </li>
              <li>3. These packages include:</li>
              <ul class='technical__indent'>
                <li>ClientID text file</li>
                <li>Analytics python file</li>
                <li>Model python file</li>
                <li>Upload python file</li>
              </ul>
              <li>
                4. Place these files onto a USB and transfer them onto the
                Tinker Edge R device or open the website directly on the Tinker
                Edge R and download the package.
              </li>
              <li>5. Place all files into the same folder.</li>
            </ul>
            <h4>Running the program on your IoT device</h4>
            <ul class='technical__normal'>
              <li>1. Open 2 terminal windows.</li>
              <li>
                2. On one terminal, run the detection program:{' '}
                <strong>python main.py</strong>
              </li>
              <li>
                3. To send data to the backend server of the website, open
                another terminal and run: <strong>python Analytics.py</strong>
              </li>
            </ul>
          </article>
        </div>
        <div class='technical__content' id='CoralyzePackages'>
          <h2>Coralyze Packages</h2>
          <article>
            <ul class='technical__normal'>
              <li>
                1. While logged into the website, navigate to the devicement
                management page.
              </li>
              <li>
                2. Click the ‘download packages’ button on top of the page.
              </li>
              <li>3. These packages include:</li>
              <ul class='technical__indent'>
                <li>ClientID text file</li>
                <li>Analytics python file</li>
                <li>Model python file</li>
                <li>Upload python file</li>
              </ul>
              <li>
                4. Place these files onto a USB and transfer them onto the IoT
                device or open the website directly onto your IoT device and
                download the package.
              </li>
              <li>5. Place all files into the same folder.</li>
            </ul>
          </article>
        </div>
        <div class='technical__content' id='CD'>
          <h2>Compatiable Devices</h2>
          <article>
            <p>Coralyze only supports the devices below:</p>
            <ul class='technical__normal'>
              <li>1. Tinker Edge R</li>
              <li>2. Tinker Edge T</li>
              <li>3. Raspberry Pi 4</li>
              <li>4. Nvidia Jetson Xavier</li>
              <li>5. AI Sage</li>
            </ul>
          </article>
        </div>
        <div class='technical__content' id='Register'>
          <h2>Creating your Coralyze account</h2>
          <article>
            <p>
              First, go to the Coralyze homepage and sign up. Coralyze will
              prepare new database storage for saving your device data.
            </p>
            <div class='technical__images'>
              <img src={register1} class='technical__images__horizontal'></img>
            </div>
            <h3>Steps:</h3>
            <ul class='technical__normal'>
              <li>1. Enter a desired username</li>
              <li>
                2. Enter a password (Must contain atleast 8 characters | 1
                uppercase character | 1 lowercase character | 1 number)
              </li>
              <li>3. Repeat your password for confirmation</li>
              <li>4. Enter your email</li>
              <li>5. Click on the register button</li>
            </ul>
            <p>
              Once all steps above have completed, a notification will appear
              showing you have registered an account with us.
            </p>
            <div class='technical__images'>
              <img src={register2} class='technical__images__small'></img>
            </div>
          </article>
        </div>
        <div class='technical__content' id='Login'>
          <h2>Logging into your Coralyze account</h2>
          <article>
            <p>First, go to the Coralyze login page.</p>
            <div class='technical__images'>
              <img src={login1} class='technical__images__horizontal'></img>
            </div>
            <h3>Steps:</h3>
            <ul class='technical__normal'>
              <li>1. Enter the username you used to create with Coralyze</li>
              <li>2. Enter the password you used to create with Coralyze</li>
              <li>3. Click on the login button</li>
            </ul>
            <p>
              Once all steps above have completed, you will be redirected to the
              Coralyze Dashboard where you see a notification will appear
              showing you have sucessfully logged in.
            </p>
            <div class='technical__images'>
              <img src={login2} class='technical__images__small'></img>
            </div>
          </article>
        </div>
        <div class='technical__content' id='ChangePassword'>
          <h2>Changing your Coralyze password</h2>
          <article>
            <p>First, log into Coralyze using the login page.</p>
            <div class='technical__images'>
              <img
                src={changepassword1}
                class='technical__images__horizontal'
              ></img>
            </div>
            <h3>Steps:</h3>
            <ul class='technical__normal'>
              <li>1. Navigate to the Account setting Page</li>
              <li>2. Enter the username you used to log into Coralyze</li>
              <li>3. Enter your new password</li>
              <li>4. Enter your new password again for confirmation</li>
              <li>5. Enter your email</li>
              <li>6. Click the 'Update' Button to save your new details</li>
            </ul>
          </article>
        </div>
        <div class='technical__content' id='ResetPassword'>
          <h2>Resetting your Coralyze password</h2>
          <article>
            <p>
              First, go to the{' '}
              <a href='/forgotpassword'>
                reset password page. You will be greeted with a form to input
                your email address you used to register.
              </a>
            </p>
            <div class='technical__images'>
              <img
                src={resetpassword1}
                class='technical__images__horizontal'
              ></img>
            </div>
            <h3>Steps:</h3>
            <ul class='technical__normal'>
              <li>1. Enter the email you used to register with Coralyze</li>
              <li>
                2. A notification will appear if an reset password email was
                sent
              </li>
              <li>
                3. Check your email, you should receive an email like below
              </li>
              <div class='technical__images'>
                <img
                  src={resetpassword2}
                  class='technical__images__large'
                ></img>
              </div>
              <li>
                4. Click on reset password button or the link below if the
                button does not work
              </li>
              <li>
                5. You will then be redirected to an password change page like
                below
              </li>
              <div class='technical__images'>
                <img
                  src={resetpassword3}
                  class='technical__images__large'
                ></img>
              </div>
              <li>6. Enter your new Coralyze password</li>
              <li>7. Click reset</li>
              <li>8. Your password should now be reset</li>
            </ul>
          </article>
        </div>
        <div class='technical__content' id='DashboardGuide'>
          <h2>Dashboard Guide</h2>
          <article>
            <p>
              Once you're logged into the dashboard, you will be greeted with a
              analytics page
            </p>
            <div class='technical__images'>
              <img src={dashboard2} class='technical__images__horizontal'></img>
            </div>
            <ul class='technical__normal'>
              <li>
                The Coralyze Dashboard you see at first will be blank, this is
                because there is no data being sent through by your IoT device.
              </li>
              <li>
                Before anything appears, you must add an IoT device to see
                results.
              </li>
              <li>
                Once added and you've executed the{' '}
                <a href='#CoralyzePackages'>Coralyze Scripts</a> you will being
                to see results like below
              </li>
              <div class='technical__images'>
                <img
                  src={dashboard1}
                  class='technical__images__horizontal'
                ></img>
              </div>
            </ul>
          </article>
        </div>
        <div class='technical__content' id='AddDevice'>
          <h2>Adding an IoT device</h2>
          <article>
            <h3>Steps:</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia,
              ut.
            </p>
            <ul class='technical__normal'>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia, ut.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia, ut.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia, ut.
              </li>
            </ul>
          </article>
        </div>
        <div class='technical__content' id='ResetChartData'>
          <h2>Resetting IoT device data</h2>
          <article>
            <p>
              To reset your IoT device data, please contact the Coralyze team at
              INJECT-DevOps@outlook.com <br />
              Our team will respond back shortly and provide a comprehensive
              step guide to help you
            </p>
          </article>
        </div>
        <div class='technical__content' id='CustomiseUI'>
          <h2>CustomiseUI</h2>
          <article>
            <h3>Feature to come in the near future</h3>
            <p>
              If you have any enquiries, feel free to send an email to
              INJECT-DevOps@outlook.com
              <br />
              Our team will respond back shortly
            </p>
          </article>
        </div>
        <div class='technical__content' id='Report'>
          <h2>Report a bug</h2>
          <article>
            <p>
              If you see a potential bug please send a pull request to our
              GitHub or contact the Coralyze team at INJECT-DevOps@outlook.com{' '}
              <br />
              Our team will respond back shortly
            </p>
          </article>
        </div>
        <div class='technical__content' id='ContactUs'>
          <h2>Contact Us</h2>
          <article>
            <h3>Steps:</h3>
            <ul class='technical__normal'>
              <li>1. Navigate to the Contact Us Page</li>
              <li>2. Enter your details</li>
              <li>3. Click the 'Submit' Button</li>
            </ul>
            Or contact the Coralyze team at INJECT-DevOps@outlook.com <br />
            Our team will respond back shortly
          </article>
        </div>
        <div class='technical__content' id='Troubleshooting'>
          <h2>Troubleshooting</h2>
          <article>
            <h3>
              A step by step troubleshooting feature will come in the near
              future
            </h3>
            <p>
              If you have any enquiries, feel free to send an email to
              INJECT-DevOps@outlook.com
              <br />
              Our team will respond back shortly
            </p>
          </article>
        </div>
        <div class='technical__content' id='Device'>
          <h2>Device.</h2>
          <article>
            <p>Images of the Tinker Edge T Device</p>
            <div class='technical__images'>
              <img src={image1} class='technical__images__horizontal'></img>
              <img
                src={image2}
                class='technical__images__horizontal'
                width='500px'
                height='500px'
              ></img>
            </div>
            <div class='technical__images'>
              <img
                src={image3}
                class='technical__images__vertical'
                width='500px'
                height='500px'
              ></img>
              <img
                src={image4}
                class='technical__images__vertical'
                width='500px'
                height='500px'
              ></img>
              <img
                src={image5}
                class='technical__images__vertical'
                width='500px'
                height='500px'
              ></img>
              <img
                src={image6}
                class='technical__images__vertical'
                width='500px'
                height='500px'
              ></img>
            </div>
          </article>
        </div>
        <div class='technical__content' id='Origin'>
          <h3>Origin.</h3>
          <article>
            <p>
              The ASUS Tinker Board is a single board computer launched by ASUS
              in early 2017. Its physical size and GPIO pinout are designed to
              be compatible with the second and third-generation Raspberry Pi
              models. The first released board features 4K video, 2GB of onboard
              RAM, gigabit Ethernet and a Rockchip RK3288 processor running at
              1.8 GHz.
            </p>
          </article>
        </div>
        <div class='technical__content' id='Specifications'>
          <h3>Specifications.</h3>
          <article>
            <p>Tinker Edge T Specifications</p>
            <table class='technical__table'>
              <thead>
                <tr>
                  <th>Release Date</th>
                  <tr>
                    <td>November 2019</td>
                  </tr>
                </tr>
                <tr>
                  <th>SoC</th>
                  <tr>
                    <td>NXP i.MX 8M</td>
                  </tr>
                </tr>
                <tr>
                  <th>Architecture</th>
                  <tr>
                    <td>ARMv8 (64-bit)</td>
                  </tr>
                </tr>
                <tr>
                  <th>CPU</th>
                  <tr>
                    <td>Quad core 1.5GHz ARM Cortex-A53</td>
                  </tr>
                </tr>
                <tr>
                  <th>GPU</th>
                  <tr>
                    <td>GC7000 Lite 3D GPU</td>
                  </tr>
                </tr>
                <tr>
                  <th>Coprocessor</th>
                  <tr>
                    <td>
                      Google Edge TPU <br />4 TOPS of performance
                    </td>
                  </tr>
                </tr>
                <tr>
                  <th>RAM</th>
                  <tr>
                    <td>1GB LPDR4</td>
                  </tr>
                </tr>
                <tr>
                  <th>Storage</th>
                  <tr>
                    <td>8GB eMMC</td>
                  </tr>
                </tr>
                <tr>
                  <th>Video Output</th>
                  <tr>
                    <td>
                      1 x full size HDMI 1.4 <br />1 x MIPI-DSI (compatible with
                      the Raspberry Pi 7" display and others)
                    </td>
                  </tr>
                </tr>
                <tr>
                  <th>Video Input</th>
                  <tr>
                    <td>2x MIPI-CSI camera</td>
                  </tr>
                </tr>
                <tr>
                  <th>Audio</th>
                  <tr>
                    <td>N/A</td>
                  </tr>
                </tr>
                <tr>
                  <th>Other IO</th>
                  <tr>
                    <td>
                      40-pin header with: <br />
                      up to 28 x GPIO pins <br />
                      up to 2 x SPI bus <br />
                      up to 2 x I2C bus <br />
                      up to 4 x UART <br />
                      up to 2 x PWM <br />
                      up to 1 x PCM/I2S (Enhanced I2S pin with Slave mode){' '}
                      <br />
                      2 x 5V power pins <br />
                      2 x 3.3V power pins <br />8 x ground pins
                    </td>
                  </tr>
                </tr>
              </thead>
            </table>
          </article>
        </div>
        <div class='technical__content' id='Features'>
          <h3>Features.</h3>
          <article>
            <h4>AI Accelerator</h4>
            <p>
              Tinker Edge T is a single-board computer (SBC) specially designed
              for AI applications. It features the Google Edge TPU, a machine
              learning (ML) accelerator that speeds up processing efficiency,
              lowers power demands and makes it easier to build connected
              devices and intelligent applications. With this onboard ML
              accelerator, Tinker Edge T is capable of performing four
              tera-operations per second (TOPS) using only 0.5 watts per unit of
              computation. It is also optimized for TensorFlow Lite models,
              making it easy to compile and run common ML models.
            </p>
            <h4>NXP i.MX 8M processor</h4>
            <p>
              With its powerful and modern quad-core ARM-based NXP i.MX 8M
              processor, Tinker Edge T offers a powerful solution for graphics,
              machine vision, video, audio, voice and safety-critical
              applications. Tinker Edge T features 1 GB of LPDDR4 dual-channel
              memory, the 4th generation of low-power DDR DRAM technology,
              offering faster speeds and even lower power consumption for
              improved system performance and efficiency. Tinker Edge T also
              comes equipped with an onboard 8 GB eMMC and SD 3.0 interface that
              offers significantly faster read and write speeds for the OS,
              applications and file storage.
            </p>
            <h4>Advanced power design</h4>
            <p>
              Most SBC motherboards only offer a 15 watt (5V 3A) power design,
              which can cause device and system instability when there are
              multiple connected devices. Other SBCs have power designs that
              lower the performance of their I/O ports. Tinker Edge T has a
              special power design that, together with a DC head power supply,
              delivers up to 45 watts of power, enabling stable system operation
              and full I/O performance, even with multiple connected devices.
              Additionally, an exclusive power-protection design activates
              automatically if the supplied current and voltage change
              significantly, effectively protecting the board and all connected
              devices.
            </p>
            <h4>More connectivity options for makers</h4>
            <p>
              Tinker Edge T features a rich I/O interface, including one
              MIPI-DSI connection for displays and touch screens, and two
              MIPI-CSI connections for compatible cameras to enable computer
              vision for applications such as depth measurement, smart vending
              machine QR code payment systems and interactive advertising.
              <br />
              <br />
              Tinker Edge T has a maker-friendly design that offers many
              carefully considered features to provide a superior experience for
              first-time builders and seasoned hobbyists alike. Programmable
              LEDs let makers develop custom lighting behaviors, such as system
              notifications and status indicators, and the color-coded GPIO
              header makes it easy to recognize respective pin headers.
              <br />
              <br />
              Tinker Edge T also features a full-size HDMI port, USB Type-A, USB
              Type-C, gigabit LAN and integrated Wi-Fi and Bluetooth for
              internet and network connectivity.
            </p>
            <h4>Heatsink included</h4>
            <p>
              Tinker Edge T includes an active heatsink, which helps improve
              heat dissipation under heavy loading or in hot ambient
              environments.
            </p>
            <h4>Neural network tools for users</h4>
            <p>
              ASUS provides a robust API and SDK that enables users to deploy
              machine learning models to Tinker Edge T easily for applications
              such as image classification and object detection.
            </p>
            <h4>OS flash tool*</h4>
            <p>
              Tinker Edge T comes with a cross-platform OS flash tool that
              enables easy OS image flashing to SD cards and USB drives,
              enabling you to get your system up and running quickly.
            </p>
            <h4>Enhanced OS interface*</h4>
            <p>
              An intuitive software interface offers makes it easy to navigate
              the features of Tinker Edge T, and shortcuts provide quick,
              convenient access to commonly user functions.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSection;
