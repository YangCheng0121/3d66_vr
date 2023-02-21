import useKrpano from '@/hooks/krpano'

const KrpanoExample = () => {
  const { containerRef } = useKrpano()

  return <div ref={containerRef} />
}

export default KrpanoExample
