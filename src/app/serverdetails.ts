export class ServerDetails {
  // 1. the Service name
  public static searchServiceName = 'jfk-search-service-w2a6dt7sodehi';
  // 2. The Admin Key
  public static searchServiceAdminApiKey = '5D2D2D0B066FF2AAA832B2B361DB9A69';
  // 3. The Index Name
  public static searchIndexName = 'jfkindex';
  public static searchIndexNameLucene = '';
  // 4. The API Version
  public static apiVersion = '2021-04-30-Preview';
  // 5. The Search URLS
  // tslint:disable-next-line: max-line-length
  public static searchUri = `https://${ServerDetails.searchServiceName}.search.windows.net/indexes/${ServerDetails.searchIndexName}/docs/search?api-version=${ServerDetails.apiVersion}`;

// tslint:disable-next-line: max-line-length
public static searchUriLucene = `https://${ServerDetails.searchServiceName}.search.windows.net/indexes/${ServerDetails.searchIndexNameLucene}/docs/search?api-version=${ServerDetails.apiVersion}`;


  // tslint:disable-next-line: max-line-length
  public static autocompleteUri = `https://${ServerDetails.searchServiceName}.search.windows.net/indexes/${ServerDetails.searchIndexName}/docs/autocomplete?api-version=${ServerDetails.apiVersion}`;


}
