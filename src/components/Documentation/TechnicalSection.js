import React from 'react';
import './TechnicalSection.scss';
import image1 from '../../images/Documentation/tinker_edge_T_image1.jpg';
import image2 from '../../images/Documentation/tinker_edge_T_image2.jpg';
import image3 from '../../images/Documentation/tinker_edge_T_image3.jpg';
import image4 from '../../images/Documentation/tinker_edge_T_image4.jpg';
import image5 from '../../images/Documentation/tinker_edge_T_image5.jpg';
import image6 from '../../images/Documentation/tinker_edge_T_image6.jpg';

const TechnicalSection = () => {
  return (
    <div>
      <div class="technical">
        <h1>Coralyze technical documentation.</h1>
        <div class="technical__content" id="Introduction">
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
        <div class="technical__content" id="Future_Plan">
          <h2>Future plan.</h2>
          <article>
            <p>
              After successful deployment of Coralyze, we plan to experiment
              with the device and apply its capabilities to the following
              concepts:
            </p>
            <ul>
              <li>CCTV surveillance.</li>
              <li>
                Identifying ID card photos and matching the face with the card
                holder.
              </li>
              <li>
                Surveillance through night vision or thermal vision cameras
                (monitoring stress levels based on thermal spikes in body
                temperature).
              </li>
              <li>Check different angles of the suspects face and body.</li>
              <li>Hand washing detection.</li>
              <li>Outdoor animal tracking/identification</li>
            </ul>
          </article>
        </div>
        <div class="technical__content" id="Device">
          <h2>Device.</h2>
          <article>
            <p>Images of the Tinker Edge T Device</p>
            <div class="technical__images">
              <img src={image1} class="technical__images__horizontal"></img>
              <img src={image2} class="technical__images__horizontal"></img>
            </div>
            <div class="technical__images">
              <img src={image3} class="technical__images__vertical"></img>
              <img src={image4} class="technical__images__vertical"></img>
              <img src={image5} class="technical__images__vertical"></img>
              <img src={image6} class="technical__images__vertical"></img>
            </div>
          </article>
        </div>
        <div class="technical__content" id="Origin">
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
        <div class="technical__content" id="Specifications">
          <h3>Specifications.</h3>
          <article>
            <p>Tinker Edge T Specifications</p>
            <table class="technical__table">
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
        <div class="technical__content" id="Features">
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
        <div class="technical__content" id="Appliance">
          <h3>Appliance</h3>
          <article>
            <h4>Our Solution</h4>
            <p>
              NOT COMPLETED <br />
              Things to add: <br />
              - (Background info) <br />
              - (Steps required) <br />
              - (How it works) <br />
              - (etc.) <br />
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSection;
