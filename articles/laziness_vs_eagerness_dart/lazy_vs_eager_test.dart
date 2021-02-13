import "package:test/test.dart";

void main() {
  //////////////////////////////////////////////////////////////////////////////////////////////////

  test("Lazy vs Eager", () {
    var lazyCounter = 0;
    var eagerCounter = 0;

    var filtraImparLazy = [1, 2, 3, 4, 5, 6, 7].where((i) {
      lazyCounter++;
      return i % 2 == 0;
    });

    var filtraImparEager = [1, 2, 3, 4, 5, 6, 7].where((i) {
      eagerCounter++;
      return i % 2 == 0;
    }).toList();

    print("\n\n---------- Init ----------\n\n");

    filtraImparLazy.length;
    filtraImparLazy.length;
    filtraImparLazy.length;

    filtraImparEager.length;
    filtraImparEager.length;
    filtraImparEager.length;

    print("\n\n---------- Lazy vs Eager ----------\n\n");

    print("Lazy: $lazyCounter");
    print("Eager: $eagerCounter");

    print("\n\n---------- FIM ----------\n\n");
  });

  // TODO: Mencionar diretamente os EfficientLengthIterable
  // IterableMixin, ListMixin, SetMixin e MapMixin

  /// O método `SnipsCanalRecentes.comConversasRecentesDasMsgs` ilustra bem uma aplicação desse
  /// conceito:
  ///
  /// TODO: Atualizar o código aqui!
  /// ```dart
  ///
  /// ```
  ///
  /// Por padrão, talvez seja válido utilizar `List`s, pois o comportamento é mais usual e é muito
  /// mais provável que cálculos sobre uma lista ou iterable sejam feitos mais de uma vez do que
  /// somente uma.
  ///
  /// Porém também é preciso notar que, a princípio, não há paginação no Pid, ou seja, o número
  /// máximo de itens de uma lista pode ser muito grande, sendo assim, não fica claro, como regra
  /// geral, qual direção tomar, é preciso ficar atento.

  //////////////////////////////////////////////////////////////////////////////////////////////////

  int eagerCounter = 0;
  int lazyCounter = 0;

  List<int> removeImpares_eager(Iterable<int> source) {
    return source.where((i) {
      eagerCounter++;
      print("removeImpares_eager");
      return i % 2 == 0;
    }).toList();
  }

  List<int> removeMenoresQue10_eager(Iterable<int> source) {
    return source.where((i) {
      eagerCounter++;
      print("removeMenoresQue10_eager");
      return i >= 10;
    }).toList();
  }

  Iterable<int> removeImpares_lazy(Iterable<int> source) {
    return source.where((i) {
      print("removeImpares_lazy");
      lazyCounter++;
      return i % 2 == 0;
    });
  }

  Iterable<int> removeMenoresQue10_lazy(Iterable<int> source) {
    return source.where((i) {
      print("removeMenoresQue10_lazy");
      lazyCounter++;
      return i >= 10;
    });
  }

  test("Ordem de avaliação", () {
    var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    print("\n\n---------- Init ----------\n\n");

    Iterable<int> eager = removeMenoresQue10_eager(removeImpares_eager(list));

    Iterable<int> lazy = removeMenoresQue10_lazy(removeImpares_lazy(list));

    print("\n\n---------- Lazy ----------\n\n");

    // Note que, para Iterables, Dart imprime com `()`; e, para List, com `[]`.
    print(lazy);

    print("\n\n---------- Eager ----------\n\n");

    print(eager);

    print("\n\n---------- Contadores ----------\n\n");

    print("Lazy: $lazyCounter");
    print("Eager: $eagerCounter");

    print("\n\n---------- FIM ----------\n\n");
  });

  /// Um Iterable(Iterable) sobre N valores seria basicamente equivalente a um `for` dentro de
  /// outro `for`, resultando em X*Y operacoes (*thunk*s em linguagens funcionais). Cada operação é
  /// ocupa sempre mais espaço/memória do que um valor isoladamente. Isso no final gera muita
  /// ineficiência em memória, *memory leaks*. Em linguagens funcionais é imperativo criar *Tail
  /// Call Optimitazions* (TCO) para solucionar este problema.

  //////////////////////////////////////////////////////////////////////////////////////////////////

  /// Gerador sob demanda.
  Iterable<int> naturalsFunc() sync* {
    int k = 0;
    // Loop infinito!!!
    while (true) yield k++;
  }

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

  //////////////////////////////////////////////////////////////////////////////////////////////////

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

  //////////////////////////////////////////////////////////////////////////////////////////////////

  // TODO: Perguntar para os desenvolvedores de Dart por que exatamente a escolha de fazer as
  // coleções com Iterable
}
