



import React, { useContext, useState } from "react";
import styles from './css/Introduce.module.css';
// import styles from './css/TextInner.module.css';

function Introduce() {

  return (
    <div className={styles.margin_tb80}>

          <div className={styles.bg_image_wrap}>
            <p className={styles.bg_title}>BMPO 소개 <span>Busan Metropolitan Philharmonic Orchestra</span></p>
          </div>

              <p className={styles.intext}>
                <h4><span>| 사회적기업 · 전문예술법인 </span>부산 메트로폴리탄 필하모닉 오케스트라</h4>
                2009년 7월 1일 창단 되어 음악을 국제행사에서 연주하고 있으며,{"\n"}
                여러 방송사에서 실황을 방영하기도 하는 등 왕성한 활동을 해오고 있습니다.{"\n"}
                부산 경남지역에서 오케스트라로서는 최초로 2011년 5월 사회적기업으로 인증 받았으며{"\n"}
                2012년 9월 전문예술법인으로 지정된 오케스트라입니다.
              </p>

              <p className={styles.intext}>
                <h4><span>| 클래식 대중화를 이끄는 </span>부산 메트로폴리탄 필하모닉 오케스트라</h4>
                연주자로서 훌륭한 연주를 들려드리기 위한 노력과 더불어 공연장을 벗어나 
                시간적, 공간적 제약으로 {"\n"}
                공연을 접하기 힘든 학생이나 소외 계층분들을 위해‘찾아가는 음악회’, ‘음악교실’ 같은 다양한 기획공연을 {"\n"}
                통해 수준높인 음악연주를 시민들과 참여하고함께 즐길 수 있는 ‘능동적 음악문화’를 바꾸어 나가는 것을 목표로 하고 있습니다.{"\n"}
                더불어 음악문화의 저변확대를 위해 클래식을 넘어 영화음악, 재즈, 팝, 애니메이션과 같은 여러 가지 장르의 음악을{"\n"}
                아름다운 오케스트라 음악으로 재 편곡하여 대중에게 더욱 더 친숙하게 다가가 품격 있는 연주를 선사하고자 합니다.
              </p>

              <p className={styles.intext}>
                <h4><span>| 시민과 함께하는 </span>부산 메트로폴리탄 필하모닉 오케스트라</h4>
                본 단체는 설립된지도 2009년부터 지금까지, ‘부산국제어린이청소년영화제’ ‘애니메이션 음악회’를 주관하고 있습니다.{"\n"}
                저희는 시민분들과 더욱 오케스트라보다 가까이 다가가기 위해 노력하고, 부산시의 사회적 인재발굴 을 위한 {"\n"}
                예술가의 지원과 품격 있는 시민 문화를 형성하는데 여러분들과 함께 보다 적극적이 다가갈 수 있는 보다 큰 단체로 발전하고자 합니다.
              </p>

      </div>
  );
}


export default Introduce;


