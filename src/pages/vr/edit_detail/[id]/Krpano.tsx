import useKrpano from '@/hooks/krpano'

const Krpano = () => {
  const { containerRef } = useKrpano()

  return <div ref={containerRef}  style={{ width: '100%', height: '100%' }} />
}

export default Krpano
