interface MyApiHandler<T> {
  fetchData(endpoint: string): Promise<T>
}
class MyApiHandler<T> implements MyApiHandler<T> {
  private baseUrl: string
  constructor(baseUrl: string) {
    this.baseUrl = base
  }

  fetchData(endpoint: string): Promise<T> {}
}
