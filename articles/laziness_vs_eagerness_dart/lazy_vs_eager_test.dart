import "package:test/test.dart";

void main() {
  //----------------------------------------------------------------------------
  test("Lazy vs Eager", () {
    var lazyCounter = 0;
    var eagerCounter = 0;

    var lazyOddFilter = [1, 2, 3, 4, 5, 6, 7].where((i) {
      lazyCounter++;
      return i % 2 == 0;
    });

    var evenFilterEager = [1, 2, 3, 4, 5, 6, 7].where((i) {
      eagerCounter++;
      return i % 2 == 0;
    }).toList();

    print("\n\n---------- Init ----------\n\n");

    lazyOddFilter.length;
    lazyOddFilter.length;
    lazyOddFilter.length;

    evenFilterEager.length;
    evenFilterEager.length;
    evenFilterEager.length;

    print("\n\n---------- Lazy vs Eager ----------\n\n");

    print("Lazy: $lazyCounter");
    print("Eager: $eagerCounter");

    print("\n\n---------- END ----------\n\n");
  });
  //----------------------------------------------------------------------------
  int eagerCounter = 0;
  int lazyCounter = 0;

  List<int> removeOdd_eager(Iterable<int> source) {
    return source.where((i) {
      eagerCounter++;
      print("removeOdd_eager");
      return i % 2 == 0;
    }).toList();
  }

  List<int> removeLessThan10_eager(Iterable<int> source) {
    return source.where((i) {
      eagerCounter++;
      print("removeLessThan10_eager");
      return i >= 10;
    }).toList();
  }

  Iterable<int> removeOdd_lazy(Iterable<int> source) {
    return source.where((i) {
      print("removeOdd_lazy");
      lazyCounter++;
      return i % 2 == 0;
    });
  }

  Iterable<int> removeLessThan10_lazy(Iterable<int> source) {
    return source.where((i) {
      print("removeLessThan10_lazy");
      lazyCounter++;
      return i >= 10;
    });
  }

  test("Evaluation Order", () {
    var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    print("\n\n---------- Init ----------\n\n");

    Iterable<int> eager = removeLessThan10_eager(removeOdd_eager(list));

    Iterable<int> lazy = removeLessThan10_lazy(removeOdd_lazy(list));

    print("\n\n---------- Lazy ----------\n\n");

    // Note que, para Iterables, Dart imprime com `()`; e, para List, com `[]`.
    print(lazy);

    print("\n\n---------- Eager ----------\n\n");

    print(eager);

    print("\n\n---------- Counters ----------\n\n");

    print("Lazy: $lazyCounter");
    print("Eager: $eagerCounter");

    print("\n\n---------- END ----------\n\n");
  });
  //----------------------------------------------------------------------------
  /// On-demand generator.
  Iterable<int> naturalsFunc() sync* {
    int k = 0;
    // Infinite loop!
    while (true) yield k++;
  }

  //----------------------------------------------------------------------------
  test("List/Iterable infinito", () {
    var naturalsIter = naturalsFunc();

    print("\n\n---------- Init ----------\n\n");

    print("A lista/iterable infinita foi criada, mas não avaliada.");

    print("\n\n--------------------\n\n");

    print("\n\n---------- takeWhile ----------\n\n");

    print("É possível trabalhar com ela, "
        "mas é preciso utilizar um método que pára em algum momento.\n\n");

    var naturalsUpTo10 = naturalsIter.takeWhile((value) => value <= 10);

    print("Naturais até 10: $naturalsUpTo10");

    print("\n\n---------- FIM ----------\n\n");
  });
  //----------------------------------------------------------------------------
  test("É possível iterar mais de uma vez em um Iterable? E em um Iterator?",
      () {
    var iterable = [1, 2, 3].where((value) => true);
    var iterator = iterable.iterator;

    print("\n\n---------- Init ----------\n\n");

    print("\n\n---------- Tipos ----------\n\n");

    print("Iterable: ${iterable.runtimeType}");
    print("Iterator: ${iterator.runtimeType}");

    print("\n\n---------- Loop no Iterable ----------\n\n");

    for (int i = 0; i < 10; i++) {
      // Utiliza um loop com `for (E element in this)`,
      // que precisa da interface do Iterable para funcionar.

      print(iterable.elementAt(i % 3));
    }

    // Internatmente, o Iterable.last cria um Iterator para iterar.

    print("\n\n---------- Loop no Iterator ----------\n\n");

    for (int i = 0; i < 10; i++) {
      iterator.moveNext();
      print(iterator.current);
    }

    print("\n\n---------- FIM ----------\n\n");

    // Há diversas especializações de Iterable e Iterator, é possível encontrá-los
    // no arquivo internal\iterable.dart

    // Mais informações: https://stackoverflow.com/a/52347550/4756173
  });
  //----------------------------------------------------------------------------
}
