import { FC } from "react"

type SectionRibbonProps = {
  title: string
}

const SectionRibbon: FC<SectionRibbonProps> = ({title}) => {
  return (
    <h2 className={'text-yellow-700 bg-yellow-200 font-main text-4xl py-4 text-center'}>{title}</h2>
  )
}

export default SectionRibbon