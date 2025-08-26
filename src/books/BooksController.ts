import type { BooksService } from "@src/types/BooksService";

/**
 * 図書館の「借りる/返す」ユースケースを扱うコントローラー
 */
export class BooksController {
  constructor(
    private readonly booksService: BooksService,
  ) {}

  // post 要求の受付メソッドの仮実装
  borrowBook(userId: string, bookId: string): void {
    this.booksService.borrowBook(userId, bookId);
  }
}
