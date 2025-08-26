export interface BooksRepository {
  isAvailable(bookId: string): boolean;
  borrowBook(userId: string, bookId: string): void;
}
