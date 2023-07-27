export function loginUser(name, password) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (Math.random() > 0.5) {
          resolve({ok: true})
        } else {
          resolve({ok: false})
        }
      },
      (Math.random() * 2000) + 1000
    )
  })
}