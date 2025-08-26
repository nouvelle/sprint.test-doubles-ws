import type { BooksRepository } from "@src/types/BooksRepository";

/**
 * 図書館の「借りる」ユースケースを扱うサービス
 */
export class BooksService {
  constructor(
    private readonly booksRepository: BooksRepository,
  ) {}

  borrowBook(userId: string, bookId: string): void {
    // TODO: 実装しましょう
  }

}
