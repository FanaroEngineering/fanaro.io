import "package:collection/collection.dart";
import "package:fast_immutable_collections/fast_immutable_collections.dart";
import "package:meta/meta.dart";

//------------------------------------------------------------------------------

void main() {
  //----------------------------------------------------------------------------

  print("With Regular Collections\n\n");

  const bob = Person("Bob");

  var people1 = People([bob]);
  
  print(people1);

  const jake = Person("Jake");

  var people2 = people1.add(jake);

  print(people1);
  print(people2);

  print(people1 == people2);             // false
  print(people2 == People([bob, jake])); // true

  print(people1.hashCode == people2.hashCode);             // false
  print(people2.hashCode == People([bob, jake]).hashCode); // true

  //----------------------------------------------------------------------------

  print("\n\n");

  //----------------------------------------------------------------------------

  print("With FIC\n\n");

  var peopleWithFic1 = PeopleWithFic([bob].lock);
  var peopleWithFic2 = peopleWithFic1.add(jake);

  print(peopleWithFic1);
  print(peopleWithFic2);

  print(peopleWithFic1 == peopleWithFic2);                  // false
  print(peopleWithFic2 == PeopleWithFic([bob, jake].lock)); // true

  print(peopleWithFic1.hashCode == peopleWithFic2.hashCode);                  // false
  print(peopleWithFic2.hashCode == PeopleWithFic([bob, jake].lock).hashCode); // true

  //----------------------------------------------------------------------------
}

//------------------------------------------------------------------------------

@immutable
class PeopleWithFic {
  final IList<Person> people;

  PeopleWithFic(this.people);

  PeopleWithFic add(Person person) => PeopleWithFic(people.add(person));

  @override
  bool operator ==(Object other) => identical(this, other) ||
      other is PeopleWithFic &&
      runtimeType == other.runtimeType &&
      people == other.people;

  @override
  int get hashCode => people.hashCode;

  @override
  String toString() => people.toString();
}

//------------------------------------------------------------------------------

@immutable
class People {
  final List<Person> _people;

  People(List<Person> people): _people = List.of(people);

  People._(this._people);

  // An example "mutable" operaton. Now imagine dozens of these operations, 
  // each needing extra care from you in order to not cause any side effects.
  People add(Person person) {
    var newPeopleList = List.of(_people)..add(person);
    return People._(newPeopleList);
  } 

  // If you want to create value equality for this class, you will need to 
  // override reference equality. The simplest way is to do this is to use the 
  // collection package.
  @override
  bool operator ==(Object other) => identical(this, other) ||
      other is People &&
      runtimeType == other.runtimeType &&
      const ListEquality().equals(_people, other._people);

  @override
  int get hashCode => const ListEquality().hash(_people);

  @override
  String toString() => _people.toString();

  // You could also write your own list equality. Something close to this:
  bool _listEquals<T>(List<T> a, List<T> b) {
    if (a == null)
      return b == null;
    if (b == null || a.length != b.length)
      return false;
    if (identical(a, b))
      return true;
    for (int index = 0; index < a.length; index += 1) {
      if (a[index] != b[index]) return false;
    }
    return true;
  }
}

//------------------------------------------------------------------------------

@immutable
class Person {
  final String name;

  const Person(this.name);

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is Person &&
      runtimeType == other.runtimeType &&
      name == other.name;

  @override
  int get hashCode => name.hashCode;

  @override
  String toString() => "Person: $name";
}

//------------------------------------------------------------------------------
