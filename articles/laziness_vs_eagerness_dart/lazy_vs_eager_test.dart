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

    // Note that, for Iterables, Dart prints `()`; and, for Lists, it prints `[]`.
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
  test("Infinite List/Iterable", () {
    var naturalsIter = naturalsFunc();

    print("\n\n---------- Init ----------\n\n");

    print("The infinite list/iterable was created, but not evaluated.");

    print("\n\n--------------------\n\n");

    print("\n\n---------- takeWhile ----------\n\n");

    print("It's possible to work with it,"
        "but it's necessary to add a method to "
        "stop the processing at some point");

    var naturalsUpTo10 = naturalsIter.takeWhile((value) => value <= 10);

    print("Naturals up to 10: $naturalsUpTo10");

    print("\n\n---------- END ----------\n\n");
  });
  //----------------------------------------------------------------------------
  test(
      "Is it possible to iterate more than once over an iterable?"
      "What about an Iterator?", () {
    var iterable = [1, 2, 3].where((value) => true);
    var iterator = iterable.iterator;

    print("\n\n---------- Init ----------\n\n");

    print("\n\n---------- Tipos ----------\n\n");

    print("Iterable: ${iterable.runtimeType}");
    print("Iterator: ${iterator.runtimeType}");

    print("\n\n---------- Loop no Iterable ----------\n\n");

    // Implementing an Iterable enables you to use the `for (...) {}` structure
    for (int i = 0; i < 10; i++) {
      print(iterable.elementAt(i % 3));
    }

    // Internally, `Iterable.last` cria um Iterator para iterar.

    print("\n\n---------- Loop inside Iterator ----------\n\n");

    for (int i = 0; i < 10; i++) {
      iterator.moveNext();
      print(iterator.current);
    }

    print("\n\n---------- END ----------\n\n");

    // There are many subclasses of Iterable and Iterator, you can find them
    // in the internal/iterable.dart file

    // More info: https://stackoverflow.com/a/52347550/4756173
  });
  //----------------------------------------------------------------------------
}
