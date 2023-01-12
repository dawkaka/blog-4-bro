type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {
  return <div className="max-w-[1100px] px-5 mx-auto">{children}</div>
}

export default Container
