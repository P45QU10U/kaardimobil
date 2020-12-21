import { client } from './api-fetch-external'

const loadingAddress = {
  title: 'Loading...',
  author: 'loading...',
  // coverImageUrl: bookPlaceholderSvg,
  publisher: 'Loading Publishing',
  synopsis: 'Loading...',
  loadingBook: true,
}

function useAddressSearch(query) {
  const result = client(query)
  return { ...result, books: result.data ?? loadingAddress }
}

export { useAddressSearch }
