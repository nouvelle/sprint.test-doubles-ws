import { BooksService } from "@src/books/BooksService";
import type { BooksRepository } from "@src/types/BooksRepository";

xdescribe("Spy: 呼ばれたかどうか・引数を確認", () => {
  test("booksRepository.borrowBook が 呼ばれたことを確認", () => {
  });

  test("booksRepository.borrowBook の引数を確認", () => {
  });
});

xdescribe("Stub: 決まった値を返す", () => {
  test("BooksRepository.isAvailable が false を返す = 会員ではないことを確認", () => {
  });
});

xdescribe("Mock: 期待を満たすか検証（スパイ+アサーション）", () => {
  test("booksRepository.borrowBook の spy + assertion", () => {
  });
});

xdescribe("Dummy: 呼ばれたらエラー", () => {
  test("BooksRepository.isAvailable が false の時に.  booksRepository.borrowBook が呼ばれないことを確認", () => {
  });
});
