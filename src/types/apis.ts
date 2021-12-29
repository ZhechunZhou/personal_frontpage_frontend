export interface Projects {
    projects: ProjectMeta[]
}

export interface ProjectMeta {
    id: string
    name: string
    type: string
    tag: string
    description: string
    isUpdating: boolean
    picture: string
    repoLink: string
    demoLink: string
}

export interface Blogs {
    blogs: BlogMeta[]
}

export interface BlogMeta {
    title: string
    class: string
    date: string
    description: string,
    link: string
    image: string
}
