import { useGLTF } from '@react-three/drei'

export function PokerChip(props: any) {
  const { nodes, materials } = useGLTF('/poker_chip.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cylinder as any).geometry}
        material={materials.Material}
      />
    </group>
  )
}

useGLTF.preload('/poker_chip.glb')
