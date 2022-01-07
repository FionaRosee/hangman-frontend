export async function loadWordList () {
  const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/words'
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }

  const response = await fetch(endpoint, requestOptions)
  return await response.json()
}
