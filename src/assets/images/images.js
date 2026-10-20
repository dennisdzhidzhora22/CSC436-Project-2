const modules = import.meta.glob('./*.jpg', {
  eager: true,
  import: 'default',
})

export const IMAGES = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [
    path.match(/([^/]+)\.\w+$/)[1],
    url,
  ])
)
