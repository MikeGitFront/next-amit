import { PageBlock } from '../../../lib/cms'
import { Blocks } from '../common/Blocks'

type PrivacyPolicyPageProps = {
  blocks: PageBlock[]
  title: string
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ blocks, title }) => {
  return (
    <div className="pt-20">
      <div className="px-4 my-auto text-2xl">{title}</div>
      <Blocks blocks={blocks} />
    </div>
  )
}

export default PrivacyPolicyPage
