import Image from 'next/image'
import styles from './styles.module.css'

const steps = [
  {
    icon: '/ic_process01.svg',
    title: '1. 문의 등록',
    description:
      '상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.',
  },
  {
    icon: '/ic_process02.svg',
    title: '2. 관리자 설정',
    description: '관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.',
  },
  {
    icon: '/ic_process03.svg',
    title: '3. 임직원 가입',
    description: '이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.',
  },
  {
    icon: '/ic_process04.svg',
    title: '4. 서비스 이용',
    description: '이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!',
  },
]

export default function ProcessSteps() {
  return (
    <div className={styles.processSteps}>
      <h2 className={styles.title}>이용 프로세스 안내</h2>
      <ul className={styles.steps}>
        {steps.map((step, index) => (
          <li className={styles.step} key={index}>
            <Image
              src={step.icon}
              alt={`Step ${index + 1}`}
              width={56}
              height={56}
            />
            <div>
              <strong className={styles.stepTitle}>{step.title}</strong>
              <p className={styles.description}>{step.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
