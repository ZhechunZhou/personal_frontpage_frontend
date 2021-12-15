export interface ProjectMeta {
    id: string
    name: string
    tag: string
    description: string
    picture: string
}
export interface Blogs{
    blogs: BlogMeta[]
}
export interface BlogMeta{
    title: string
    class: string
    date: string
    description: string,
    link: string
    image: string
}
