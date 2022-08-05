import { getDefinitionFromApi } from './DictionaryApi';

test('the data from Dictionary should be fetched', async () => {
    const data = await getDefinitionFromApi();
    expect(data[0].fl).toBe('adjective');
  });
  