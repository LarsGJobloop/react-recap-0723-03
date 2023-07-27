export function authenticateUser(userData) {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (Math.random() > 0.5) {
          resolve({ok: true})
        } else {
          resolve({ok: false})
        }
      },
      (Math.random() * 1000) + 2000
    )
  })
}