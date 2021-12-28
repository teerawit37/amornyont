import { memo, useEffect, useState } from "react";
import styled from '@emotion/styled';
import Image from 'next/image';
import who1 from '../../public/assets/images/who-1.png';
import who2 from '../../public/assets/images/who-2.png';
import blogData from '../../data/blog.json';
import { useRouter } from "next/router";
import en from '../../public/locales/en';
import th from '../../public/locales/th';

const breakpoints = [375, 768, 1024, 1440]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

const ContentContainer = styled.div`
  background: #FFFFFF;
  border: 1px solid #F2F2F2;
  box-sizing: border-box;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -30px;
  z-index: 80;
  width: 100%;
  ${mq[1]} {
    padding: 32px;
    }
  ${mq[3]} {
    padding: 40px 32px;
    }
`
const SubTitle = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #232924;
  width: 100%;
  text-align: left;
  margin-bottom: 45px;
  ${mq[2]} {
    text-align: center;
    }
  ${mq[3]} {
    width: 901px;
    text-align: center;
    }
`

const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: left;
  color: #000000;
  margin-bottom: 8px;
  ${mq[3]} {
    width: 901px;
    text-align: center;
    }
`

export interface MyComponentProps {
  id: string;
  title: string;
  titleTh: string;
  desc: string;
  descTh: string;
  content: string;
  contentTh: string;
}

const WhoContent = () => {
  const [blog, setBlog] = useState<MyComponentProps>();
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : th;

  const { slug } = router.query
  useEffect(() => {
    if (slug !== undefined) {
      if (blogData) {
        const found = blogData.data.find(element => element.id === slug);
        setBlog(found);
      }
    }
  }, [slug]);

  const blog3En = () => {
    return (
      <div className="w-100">
        <p>Troubleshooting for belt products</p>
        <ul>
          <li>V-belts</li>
        </ul>
        <table cellSpacing={0} cellPadding={0}>
          <tbody>
            <tr>
              <td valign="top">
                <p><strong>Occurrence</strong></p>
              </td>
              <td valign="top">
                <p><strong>Cause</strong></p>
              </td>
              <td valign="top">
                <p><strong>Solution</strong></p>
              </td>
            </tr>
            <tr>
              <td rowSpan={4} valign="top">
                <p>Slippage</p>
              </td>
              <td valign="top">
                <p>Loose belt tension</p>
              </td>
              <td valign="top">
                <p>Apply appropriate tension</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Overload</p>
              </td>
              <td valign="top">
                <p>Increase belt width or increase the number of belt in use</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Minimum contact angle</p>
              </td>
              <td valign="top">
                <p>Widen belt width or install an idler pulley of the appropriate diameter</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Oil or water contamination</p>
              </td>
              <td valign="top">
                <p>Completely remove the oil and water and prevent further contamination by placing the belt cover</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={3} valign="top">
                <p>Early failure</p>
              </td>
              <td valign="top">
                <ul>
                  <li>Load variation/large shock</li>
                  <li>Use the belt above its transmission capacity</li>
                  <li>Belts not mounted according to the specified number of belts</li>
                  <li>Not using the specified belt type</li>
                </ul>
              </td>
              <td valign="top">
                <p>While there are design elements to be altered, the specified type and number of belts should be installed (depending on the application, please upgrade the belt specification by 1 level)</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>High heat generated and large flex fatigue (overly small pulley diameter/bending angle and high revolution speed)</p>
              </td>
              <td valign="top">
                <p>Take counter-measure on heat dissipation or change the system design – alter the pulley diameter, revolution speed, bending angle</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Tension loss and slippage</p>
              </td>
              <td valign="top">
                <p>Apply appropriate tension</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={6} valign="top">
                <p>Crack</p>
              </td>
              <td valign="top">
                <p>Tension loss and slippage</p>
              </td>
              <td valign="top">
                <p>Apply appropriate tension</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Use under high temperature</p>
              </td>
              <td valign="top">
                <p>Take counter-measure on heat dissipation</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Continuous sudden stoppage and start-up</p>
              </td>
              <td valign="top">
                <p>Change the system design</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Oil contamination</p>
              </td>
              <td valign="top">
                <p>Fix oil leak and prevent oil contamination</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <ul>
                  <li>Pulley diameter too small</li>
                  <li>Too strong reverse bending due to backside tension</li>
                </ul>
              </td>
              <td valign="top">
                <p>Change the system design</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Direct exposure to sunlight</p>
              </td>
              <td valign="top">
                <p>Install belt cover</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={3} valign="top">
                <p>Base crack</p>
              </td>
              <td valign="top">
                <p>Tension pulley diameter too small</p>
              </td>
              <td valign="top">
                <p>Use a larger diameter tension pulley</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Small bending angle</p>
              </td>
              <td valign="top">
                <p>Decrease the bending angle</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Loose tension and occurrence of slippage</p>
              </td>
              <td valign="top">
                <p>Apply appropriate tension</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={4} valign="top">
                <p>Wear</p>
              </td>
              <td valign="top">
                <p>Rusty pulley groove or rough finishing of pulley groove surface</p>
              </td>
              <td valign="top">
                <p>Perform uniform finishing on the pulley groove surface</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Tension loss and slippage</p>
              </td>
              <td valign="top">
                <p>Apply appropriate tension</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <ul>
                  <li>Inappropriate pulley installation angle</li>
                  <li>Defective pulley form</li>
                  <li>Inappropriate pulley groove angle</li>
                </ul>
              </td>
              <td valign="top">
                <p>Change alignment to 1/3” and below or replace the pulley</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Damage on pulley groove</p>
              </td>
              <td valign="top">
                <p> </p>
              </td>
            </tr>
            <tr>
              <td rowSpan={3} valign="top">
                <p>Excessive vibration</p>
              </td>
              <td valign="top">
                <p>Resonance due to unstable fixture of machine body</p>
              </td>
              <td valign="top">
                <p>Secure the fixtures</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Weak belt tension</p>
              </td>
              <td valign="top">
                <p>Change inter-shaft distance</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Belt lengths not uniform</p>
              </td>
              <td valign="top">
                <p>Use matched set</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={2} valign="top">
                <p>Peeling</p>
              </td>
              <td valign="top">
                <p>Belt used beyond its transmission capacity</p>
              </td>
              <td valign="top">
                <p>Mount belts with the right specification, type, number</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <ul>
                  <li>Usage under deformed condition</li>
                  <li>Usage method resulted in large flex fatigue</li>
                </ul>
              </td>
              <td valign="top">
                <p>Change the system design</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={4} valign="top">
                <p>Noise problem</p>
              </td>
              <td valign="top">
                <p>Sudden stop and start during the usage</p>
              </td>
              <td valign="top">
                <p>Consider changing the system design for smooth operation</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Belt tension too loose</p>
              </td>
              <td valign="top">
                <p>Apply appropriate tension</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Overload</p>
              </td>
              <td valign="top">
                <p>Increase belt width or increase the number of belt in use</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Wrong belt type</p>
              </td>
              <td valign="top">
                <p>Select belt type, specification that matches the operating conditions</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={3} valign="top">
                <p>Overturning of belt</p>
              </td>
              <td valign="top">
                <p>Inappropriate pulley groove angle, installation angle</p>
              </td>
              <td valign="top">
                <p>Change alignment to 1/3” and below</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <ul>
                  <li>Pulley groove damage or sticking of belt due to roughly finished surface</li>
                  <li>Wear at pulley groove</li>
                </ul>
              </td>
              <td valign="top">
                <p>Replace the pulley</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Belt lengths not uniform during multiple usage</p>
              </td>
              <td valign="top">
                <p>Use matched set</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p> </p>
        <ul>
          <li>Timing belts</li>
        </ul>
        <table cellSpacing={0} cellPadding={0}>
          <tbody>
            <tr>
              <td valign="top">
                <p><strong>Occurrence</strong></p>
              </td>
              <td valign="top">
                <p><strong>Cause</strong></p>
              </td>
              <td valign="top">
                <p><strong>Solution</strong></p>
              </td>
            </tr>
            <tr>
              <td rowSpan={3} valign="top">
                <p>Abnormal side wear</p>
              </td>
              <td valign="top">
                <p>Poor alignment</p>
              </td>
              <td valign="top">
                <p>Adjust the alignment</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Base not adequately fixed</p>
              </td>
              <td valign="top">
                <p>Strengthen the base fixture</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Bending of the pulley flange</p>
              </td>
              <td valign="top">
                <p>Correct flange bending</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={2} valign="top">
                <p>Abnormal wear at tooth surface where pressure is being exerted</p>
              </td>
              <td valign="top">
                <p>Overload</p>
              </td>
              <td valign="top">
                <p>Amend the design and use better grade</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Overstretched belt</p>
              </td>
              <td valign="top">
                <p>Adjust the initial tension of the belt</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={2} valign="top">
                <p>Abnormal wear at contact point of pulley area</p>
              </td>
              <td valign="top">
                <p>Overstretched belt</p>
              </td>
              <td valign="top">
                <p>Adjust the initial tension of the belt</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Defective pulley tooth form</p>
              </td>
              <td valign="top">
                <p>Replace using special attention on the R of the pulley tooth end</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={2} valign="top">
                <p>Tooth damage</p>
              </td>
              <td valign="top">
                <p>Pulley diameter too small</p>
              </td>
              <td valign="top">
                <p>Change the system design</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Exertion of shock load</p>
              </td>
              <td valign="top">
                <p>Ensure that shock is not exerted on the belt or increase the belt width</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={3} valign="top">
                <p>Breaking of tensile body</p>
              </td>
              <td valign="top">
                <p>Overload</p>
              </td>
              <td valign="top">
                <p>Change the system design</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Drop in elasticity or corrosion of tensile body</p>
              </td>
              <td valign="top">
                <p>Check the storage condition and transport condition of the belt</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Exertion of shock load</p>
              </td>
              <td valign="top">
                <p>Ensure that shock is not exerted on the belt or increase the belt width</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={2} valign="top">
                <p>Crack at the back side</p>
              </td>
              <td valign="top">
                <p>Usage under -30°C</p>
              </td>
              <td valign="top">
                <p>Raise the surrounding temperature</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Pulley diameter too small</p>
              </td>
              <td valign="top">
                <p>Use a bigger diameter pulley</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Thermal aging of rubber/polyurethane</p>
              </td>
              <td valign="top">
                <p>Temperature of 80°C and above at the rubber/polyurethane</p>
              </td>
              <td valign="top">
                <p>Reduce the surrounding temperature</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Swelling of the rubber</p>
              </td>
              <td valign="top">
                <p>Oil contamination</p>
              </td>
              <td valign="top">
                <p>Use polyurethane or oil resistant rubber belt</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={3} valign="top">
                <p>Abnormal wear at pulley tooth</p>
              </td>
              <td valign="top">
                <p>Overload</p>
              </td>
              <td valign="top">
                <p>Change the system design</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Overstretched belt</p>
              </td>
              <td valign="top">
                <p>Adjust the initial tension of the belt</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Unsuitable pulley material (too soft)</p>
              </td>
              <td valign="top">
                <p>Add surface treatment or change the material of pulley</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={2} valign="top">
                <p>Wear at pulley edge</p>
              </td>
              <td valign="top">
                <p>Pulley life</p>
              </td>
              <td valign="top">
                <p>Change to a new pulley</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Overstretched belt (tensile body can be seen underneath the belt)</p>
              </td>
              <td valign="top">
                <p>Change to a new pulley and belt while loosening the tension</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={5} valign="top">
                <p>Abnormal operation sounds</p>
              </td>
              <td valign="top">
                <p>Poor alignment</p>
              </td>
              <td valign="top">
                <p>Adjust the alignment</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Overstretched belt</p>
              </td>
              <td valign="top">
                <p>Adjust the initial tension of the belt</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Overload</p>
              </td>
              <td valign="top">
                <p>Change the system design</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Pulley diameter too small</p>
              </td>
              <td valign="top">
                <p>Change the system design</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Defective pulley tooth form</p>
              </td>
              <td valign="top">
                <p>Ensure that pulley tooth is accordance to standard dimensions</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={2} valign="top">
                <p>Belt looks elongated</p>
              </td>
              <td valign="top">
                <p>Short inter-shaft distance</p>
              </td>
              <td valign="top">
                <p>Adjust to the correct inter-shaft distance</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Loosening of the base</p>
              </td>
              <td valign="top">
                <p>Strengthen the base fixture</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  const blog3th = () => {
    return (
      <div className="w-100">
        <p>ปัญหาที่อาจพบและการแก้ไข</p>
        <ul>
          <li>สายพานรถยนต์ V-belt</li>
        </ul>
        <table cellSpacing={0} cellPadding={0}>
          <tbody>
            <tr>
              <td valign="top">
                <p><strong>ลักษณะผิดปกติ</strong></p>
              </td>
              <td valign="top">
                <p><strong>สาเหตุหลัก</strong></p>
              </td>
              <td valign="top">
                <p><strong>วิธีแก้ไข</strong></p>
              </td>
            </tr>
            <tr>
              <td rowSpan={4} valign="top">
                <p>สายพานหลุดจากร่อง</p>
              </td>
              <td valign="top">
                <p>สายพานหย่อน</p>
              </td>
              <td valign="top">
                <p>ใช้แรงตึงที่เหมาะสม</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Overload</p>
              </td>
              <td valign="top">
                <p>เพิ่มความกว้างของสายพาน หรือเพิ่มจำนวนสานพานที่ใช้</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>มุมสัมผัสเล็กเกินไป</p>
              </td>
              <td valign="top">
                <p>เพิ่มความกว้างของสายพาน</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>มีน้ำมันหรือน้ำติดอยู่</p>
              </td>
              <td valign="top">
                <p>ขจัดน้ำ/น้ำมันออกให้หมด</p>
                <p>ติดฝาครอบป้องกันการเกาะติด</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={3} valign="top">
                <p>สายพานขาดไว</p>
              </td>
              <td valign="top">
                <ul>
                  <li>ใช้งานหนักเกินประสิทธิภาพของสายพาน</li>
                  <li>ไม่ได้ใช้สายพานที่ตรงกับการใช้งาน</li>
                </ul>
              </td>
              <td valign="top">
                <p>เปลี่ยนงานออกแบบการใช้งานของสายพาน</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>การใช้งานที่อุณหภูมิสูง ทำให้เกิดการงอ</p>
              </td>
              <td valign="top">
                <ul>
                  <li>ตรวจสอบเครื่องกระจายความร้อน</li>
                  <li>เปลี่ยนงานออกแบบการใช้งานของสายพาน</li>
                  <li>เปลี่ยนมู่เลย์/จำนวนรอบการงอของมุม</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>แรงดึงไม่พอทำให้ลื่น</p>
              </td>
              <td valign="top">
                <p>ให้แรงตึงที่เหมาะสม</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={6} valign="top">
                <p>สายพานแตก</p>
              </td>
              <td valign="top">
                <p>แรงดึงไม่พอทำให้ลื่น</p>
              </td>
              <td valign="top">
                <p>ให้แรงตึงที่เหมาะสม</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>ใช้ในสภาวะอุณหภูมิสูง</p>
              </td>
              <td valign="top">
                <p>ตรวจสอบเครื่องกระจายความร้อน</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>การหยุดและสตาร์ทอย่างกะทันหันอย่างต่อเนื่อง</p>
              </td>
              <td valign="top">
                <p>เปลี่ยนงานออกแบบการใช้งานของสายพาน</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>การเกาะติดของน้ำมัน</p>
              </td>
              <td valign="top">
                <p>แก้ไขการรั่ว/การเกาะติดของน้ำมัน</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <ul>
                  <li>เส้นผ่านศูนย์กลางของมู่เล่ย์เล็กเกินไป</li>
                  <li>การหักงอของสายพานด้านหลังมากเกินไป</li>
                </ul>
              </td>
              <td valign="top">
                <p>เปลี่ยนงานออกแบบการใช้งานของสายพาน</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>ถูกแสงแดดนานเกินไป</p>
              </td>
              <td valign="top">
                <p>ติดตั้งฝาครอบ</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={3} valign="top">
                <p>เกิดรอยปริด้านล่าง</p>
              </td>
              <td valign="top">
                <p>เส้นผ่านศูนย์กลางของมู่เล่ย์เล็กเกินไป</p>
              </td>
              <td valign="top">
                <p>ใช้มู่เล่ย์ที่มีขนาดใหญ่ขึ้น</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>การงอของมุมน้อยเกินไป</p>
              </td>
              <td valign="top">
                <p>ลดการหักมุมลง</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>แรงดึงไม่พอ ทำให้หลวม</p>
              </td>
              <td valign="top">
                <p>ให้แรงตึงที่เหมาะสม</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={4} valign="top">
                <p>การสึกหรอ</p>
              </td>
              <td valign="top">
                <ul>
                  <li>มีสนิมที่ร่องมู่เลย์</li>
                  <li>การตกแต่งผิวร่องของมู่เลย์หยาบ</li>
                </ul>
              </td>
              <td valign="top">
                <ul>
                  <li>กำจัดสนิมออกไป</li>
                  <li>ทำให้ร่องมู่เลย์เรียบอย่างสม่ำเสมอ</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>แรงตึงไม่พอทำให้หลวม</p>
              </td>
              <td valign="top">
                <p>ใช้แรงตึงที่เหมาะสม</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <ul>
                  <li>มุมติดตั้งมู่เลย์ไม่ถูกต้อง</li>
                  <li>รูปทรงมู่เลย์มีตำหนิ</li>
                </ul>
              </td>
              <td valign="top">
                <ul>
                  <li>แก้ไขมุมให้เท่ากับ 1/3”</li>
                  <li>เปลี่ยนมู่เลย์</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>รอยถลอกของร่องมู่เลย์</p>
              </td>
              <td valign="top">
                <p>ทำการติดตั้งให้มั่นคง</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={3} valign="top">
                <p>การสั่นอย่างรุนแรง</p>
              </td>
              <td valign="top">
                <p>ส่วนประกอบของเครื่องจักรติดตั้งที่ผิดปกติ</p>
              </td>
              <td valign="top">
                <p>ซ่อมส่วนที่ผิดปกติ</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>แรงดึงของสายพานต่ำไป</p>
              </td>
              <td valign="top">
                <p>เปลี่ยนระยะระหว่างแกนให้เหมาะสม</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>ความยาวสายพานไม่เท่ากัน  ในกรณีใช้หลายเส้น</p>
              </td>
              <td valign="top">
                <p>เลือกชนิดสายพานให้เหมาะสมกับการใช้</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={2} valign="top">
                <p>การลอก</p>
              </td>
              <td valign="top">
                <p>ถูกใช้งานที่มากกว่าประสิทธิภาพที่กำหนด</p>
              </td>
              <td valign="top">
                <p>ใช้ชนิดสายพาน/จำนวนสายพานที่เหมาะสม</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>สายพานที่ใช้ถูกเปลี่ยนสภาพ</p>
              </td>
              <td valign="top">
                <p>เปลี่ยนงานออกแบบการใช้งานของสายพาน</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={4} valign="top">
                <p>เสียงผิดปกติ</p>
              </td>
              <td valign="top">
                <p>เกิดจากการหยุดกะทันหันและสตาร์ทกะทันหัน</p>
              </td>
              <td valign="top">
                <p>ปรับรอบเครื่องจักรให้เดินอย่างราบรื่น</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>สายพานหย่อน</p>
              </td>
              <td valign="top">
                <p>ให้แรงตึงที่เหมาะสม</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Overload</p>
              </td>
              <td valign="top">
                <p>เพิ่มความกว้างของสายพาน หรือเพิ่มจำนวนสานพานที่ใช้</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>ใช้สายพานผิดชนิด</p>
              </td>
              <td valign="top">
                <p>เลือกชนิดสายพานให้เหมาะสมกับการใช้</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={3} valign="top">
                <p>สายพานพลิกขณะใช้งาน</p>
              </td>
              <td valign="top">
                <p>มุมของมู่เลย์ไม่ได้อยู่ในมุมที่ถูกต้อง</p>
              </td>
              <td valign="top">
                <p>แก้ไขแกนให้เท่ากับหรือต่ำกว่า 1/3”</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>มีรอยถลอกของร่องมู่เลย์</p>
              </td>
              <td valign="top">
                <p>เปลี่ยนมู่เลย์</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>ความยาวสายพานไม่เท่ากัน  ในกรณีใช้หลายเส้น</p>
              </td>
              <td valign="top">
                <p>เลือกชนิดสายพานให้เหมาะสมกับการใช้</p>
              </td>
            </tr>
          </tbody>
        </table>
        <p> </p>
        <ul>
          <li>สายพานราวลิ้น</li>
        </ul>
        <table cellSpacing={0} cellPadding={0}>
          <tbody>
            <tr>
              <td valign="top">
                <p><strong>ลักษณะผิดปกติ</strong></p>
              </td>
              <td valign="top">
                <p><strong>สาเหตุหลัก</strong></p>
              </td>
              <td valign="top">
                <p><strong>วิธีแก้ไข</strong></p>
              </td>
            </tr>
            <tr>
              <td rowSpan={3} valign="top">
                <p>การสึกหรอด้านข้างของสายพาน</p>
              </td>
              <td valign="top">
                <p>การจัดวางสายพานที่ไม่สมดุล</p>
              </td>
              <td valign="top">
                <p>ปรับสมดุลใหม่ให้ถูกต้อง</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>การติดตั้งอย่างไม่สมบูรณ์</p>
              </td>
              <td valign="top">
                <p>ติดตั้งให้แน่น และลงร่องมู่เลย์</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>การงอของแฟงค์</p>
              </td>
              <td valign="top">
                <p>แก้ไขการงอของแฟงค์</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={2} valign="top">
                <p>การสึกหรอจากแรงดันของฟันสายพาน</p>
              </td>
              <td valign="top">
                <p>Overload</p>
              </td>
              <td valign="top">
                <p>เลือกชนิดสายพานให้เหมาะสมกับการใช้</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>สายพานตึงเกินไป</p>
              </td>
              <td valign="top">
                <p>ปรับแรงตึงของสายพานใหม่</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={2} valign="top">
                <p>การสึกหรอของส่วนที่สัมผัสกับด้านรอบนอกมู่เลย์</p>
              </td>
              <td valign="top">
                <p>สายพานตึงเกินไป</p>
              </td>
              <td valign="top">
                <p>ปรับแรงตึงของสายพานใหม่</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>ลักษณะฟันของมู่เลย์สายพานไม่ตรงตามแบบ</p>
              </td>
              <td valign="top">
                <p>เปลี่ยนมู่เลย์</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={2} valign="top">
                <p>การชำรุดของฟัน</p>
              </td>
              <td valign="top">
                <p>มู่เลย์เล็กเกินไป</p>
              </td>
              <td valign="top">
                <p>เปลี่ยนไปใช้มู่เลย์ที่ใหญ่ขึ้น</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>เกิดแรงกระแทกแบบฉับพลัน</p>
              </td>
              <td valign="top">
                <ul>
                  <li>เพิ่มความกว้างของสายพาน</li>
                  <li>ป้องกันไม่ให้เกิดแรงกระแทกแบบฉับพลันบนสายพาน</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td rowSpan={3} valign="top">
                <p>Tensile body เกิดการแตกหัก</p>
              </td>
              <td valign="top">
                <p>Overload</p>
              </td>
              <td valign="top">
                <p>เปลี่ยนงานออกแบบการใช้งานของสายพาน</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Tensile body มีความยืดหยุ่นลดลง</p>
              </td>
              <td valign="top">
                <p>เช็คสภาพการเก็บรักษา สภาพการขนส่งสายพาน</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>เกิดแรงกระแทกแบบฉับพลัน</p>
              </td>
              <td valign="top">
                <ul>
                  <li>เพิ่มความกว้างของสายพาน</li>
                  <li>ป้องกันไม่ให้เกิดแรงกระแทกแบบฉับพลันบนสายพาน</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td rowSpan={2} valign="top">
                <p>รอยแตกที่หลังสายพาน</p>
              </td>
              <td valign="top">
                <p>ใช้งานที่อุณหภูมิต่ำกว่า -30°C</p>
              </td>
              <td valign="top">
                <p>ใช้ในสภาพแวดล้อมที่อุณหภูมิสูงกว่า -30°C</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>มู่เลย์เล็กเกินไป</p>
              </td>
              <td valign="top">
                <p>เปลี่ยนไปใช้มู่เลย์ที่ใหญ่ขึ้น</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>สายพานหมดสภาพจากความร้อนของ Rubber/Polyurethane</p>
              </td>
              <td valign="top">
                <p>ใช้งานที่อุณหภูมิสูงกว่า 80°C</p>
              </td>
              <td valign="top">
                <p>ลดอุณหภูมิสภาวะการใช้งาน</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>สายพานบวม</p>
              </td>
              <td valign="top">
                <p>มีน้ำมันเกาะติด</p>
              </td>
              <td valign="top">
                <p>ใช้สายพานที่ทนต่อน้ำมัน</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={3} valign="top">
                <p>การสึกหรอ ผิดปกติของฟันสายพาน</p>
              </td>
              <td valign="top">
                <p>Overload</p>
              </td>
              <td valign="top">
                <p>เปลี่ยนงานออกแบบการใช้งานของสายพาน</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>สายพานตึงเกินไป</p>
              </td>
              <td valign="top">
                <p>ปรับแรงตึงของสายพานใหม่</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>วัสดุที่ทำมู่เลย์ไม่เหมาะสม (นิ่มเกินไป)</p>
              </td>
              <td valign="top">
                <p>เปลี่ยนวัสดุของมู่เลย์</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={2} valign="top">
                <p>มู่เลย์รอบนอกสึกหรอ</p>
              </td>
              <td valign="top">
                <p>มู่เลย์ครบอายุการใช้งาน</p>
              </td>
              <td valign="top">
                <p>เปลี่ยนมู่เลย์ใหม่</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>สายพานตึงเกินไป</p>
              </td>
              <td valign="top">
                <p>เปลี่ยนมู่เลย์ใหม่ และปรับสายพานให้หย่อนลง</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={5} valign="top">
                <p>เสียงการทำงานผิดปกติ</p>
              </td>
              <td valign="top">
                <p>ติดตั้งแกนไม่สมดุล</p>
              </td>
              <td valign="top">
                <p>ปรับแกนให้สมดุล</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>สายพานตึงเกินไป</p>
              </td>
              <td valign="top">
                <p>ปรับแรงตึงของสายพานใหม่</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>Overload</p>
              </td>
              <td valign="top">
                <p>เปลี่ยนงานออกแบบการใช้งานของสายพาน</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>มู่เลย์เล็กเกินไป</p>
              </td>
              <td valign="top">
                <p>เปลี่ยนมู่เลย์ใหม่</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>ลักษณะฟันของมู่เลย์ผิดปกติ</p>
              </td>
              <td valign="top">
                <p>ใช้มู่เลย์ที่ตรงตามมาตรฐาน</p>
              </td>
            </tr>
            <tr>
              <td rowSpan={2} valign="top">
                <p>สายพานมีการยืดตัว</p>
              </td>
              <td valign="top">
                <p>ระยะระหว่างแกนสั้น</p>
              </td>
              <td valign="top">
                <p>ปรับระยะระหว่างแกนให้ถูกต้อง</p>
              </td>
            </tr>
            <tr>
              <td valign="top">
                <p>การติดตั้งสายพานหย่อนเกินไป</p>
              </td>
              <td valign="top">
                <p>ปรับตั้งสายพานให้ตึงขึ้น</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div className="container">
      <div className="d-flex">
        <ContentContainer>
          <Title>{locale === 'en' ? blog?.title : blog?.titleTh}</Title>
          <SubTitle>{locale === 'en' ? blog?.desc : blog?.descTh}</SubTitle>
          {blog !== undefined &&
            blog.id !== 'blog-3' ?
            <div dangerouslySetInnerHTML={{
              __html: locale === 'en' ? blog.content : blog.contentTh
            }}></div>
            :
            locale === 'en' ? blog3En() : blog3th()
          }
        </ContentContainer>
      </div>
    </div >
  );
}

export default memo(WhoContent);