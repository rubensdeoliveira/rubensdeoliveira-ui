export type AvatarProps = {
  name: string
}

export function Avatar({ name }: AvatarProps) {
  return <p>{name}</p>
}
