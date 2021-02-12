//------------------------------------------------------------------------------
import "package:fast_immutable_collections/fast_immutable_collections.dart";
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
void main() {
  //----------------------------------------------------------------------------
  print("\n\n------------------------------------------------------------\n\n");
  //----------------------------------------------------------------------------

  //----------------------------------------------------------------------------

  // 1) This is ok. Immutability does work in this case.
  //    (This is covered in the `List.unmodifiable` docs.)
  print("1) Direct Immutability\n\n");

  var list = [1, 2, 3];

  var unmodifiableList1 = List.unmodifiable(list);

  list.add(4);

  print("Original List: $list");
  print("Unmodifiable List 1: $unmodifiableList1");

  //----------------------------------------------------------------------------
  print("\n\n------------------------------------------------------------\n\n");
  //----------------------------------------------------------------------------

  // 2) This is not ok. Immutability doens't work because the nested elements
  //    are not themselves immutable.
  //    (This is also covered in the `List.unmodifiable` docs.)
  print("2) Nested Immutability\n\n");

  var list1 = [1, 2];
  var list2 = [1, 2, 3];
  var nestedList = [list1, list2];

  var unmodifiableList2 = List.unmodifiable(nestedList);

  list1.add(10);

  print("Original List 1: $list1");
  print("Original List 2: $list2");
  print("Unmodifiable List 2: $unmodifiableList2");

  //----------------------------------------------------------------------------
  print("\n\n------------------------------------------------------------\n\n");
  //----------------------------------------------------------------------------

  // 3) How would you modify, add, remove, etc. this `List.unmodifiable` object?
  //    FIC makes it much simpler and less error prone...
  //    And copying things to make changes will make `List.unmodifiable`
  //    unbearably slow.
  print("3) Clunky modifications natively | FIC makes it easy!\n\n");

  var list3 = [1, 2, 3];
  var unmodifiableList3 = List.unmodifiable(list3);
  var ilist3 = list3.lock;

  var newUnmodifiableList3 =
      List.unmodifiable(unmodifiableList3.toList()..add(4));
  var newIlist3 = ilist3.add(4);

  print("New UnmodifiableList 3: $newUnmodifiableList3");
  print("New IList 3: $newIlist3");

  //----------------------------------------------------------------------------
}
//------------------------------------------------------------------------------
