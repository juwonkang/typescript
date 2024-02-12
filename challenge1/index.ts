//제네릭 클래스 (큐방식으로)

class GenericQueve<T> {
  private items: T[] = []

  //enqueve 메서드 (큐를 데이터에 추가)
  enqueve(item: T): void {
    this.items.push(item)
  }

  //dequeve 메서드 (큐의 맨처음 테이터를 꺼낸다)

  dequeve(): T | undefined {
    return this.items.shift()
  }
  //peek (큐의 맨처음 데이터 확인)
  peek(): T | undefined {
    return this.items[0]
  }

  //size ( 핸제 큐의 사이즈 반환  )

  size(): number {
    return this.items.length
  }
}

const stringQ = new GenericQueve<string>()
stringQ.enqueve('hello')
console.log(stringQ.peek())
stringQ.dequeve()
stringQ.enqueve('what tht fuck')
console.log(stringQ.size())
console.log(stringQ.peek)
