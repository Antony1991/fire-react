const modulesPage = import.meta.glob('/src/packages/**/doc.md', {
  as: 'raw',
  eager: true,
})

const routes: any[] = []
for (const path in modulesPage) {
  const name = (/packages\/(.*)\/doc\.md/.exec(path) as unknown[])[1]
  routes.push({
    path: `/zh-CN/component/${name}`,
    component: modulesPage[path],
    name,
  })
}

const modulesENPage = import.meta.glob('/src/packages/**/doc.en-US.md', {
  as: 'raw',
  eager: true,
})

for (const path in modulesENPage) {
  const name = (/packages\/(.*)\/doc\.en-US\.md/.exec(path) as unknown[])[1]
  routes.push({
    path: `/en-US/component/${name}`,
    component: modulesPage[path],
    name,
  })
}

export default routes
