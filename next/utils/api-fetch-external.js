function client(endpoint, customConfig = {}) {
  const config = {
    method: 'GET',
    ...customConfig,
  }

  try {
    return window.fetch(`${endpoint}`, config).then(async (response) => {
      const data = await response.json()
      if (response.ok) {
        return data
      }
      return Promise.reject(data)
    })

  } catch (err) {
    console.error(err)
  }

}

export { client }
