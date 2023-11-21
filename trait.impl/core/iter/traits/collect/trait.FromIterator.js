(function() {var implementors = {
"arrow_array":[["impl&lt;Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;Ptr&gt; for <a class=\"struct\" href=\"arrow_array/array/boolean_array/struct.BooleanArray.html\" title=\"struct arrow_array::array::boolean_array::BooleanArray\">BooleanArray</a>"],["impl&lt;Ptr, T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteArrayType.html\" title=\"trait arrow_array::types::ByteArrayType\">ByteArrayType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Ptr&gt;&gt; for <a class=\"struct\" href=\"arrow_array/array/byte_array/struct.GenericByteArray.html\" title=\"struct arrow_array::array::byte_array::GenericByteArray\">GenericByteArray</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteArrayType::Native\">Native</a>&gt;,</span>"],["impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ArrowPrimitiveType.html\" title=\"trait arrow_array::types::ArrowPrimitiveType\">ArrowPrimitiveType</a>, Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"arrow_array/array/primitive_array/struct.NativeAdapter.html\" title=\"struct arrow_array::array::primitive_array::NativeAdapter\">NativeAdapter</a>&lt;T&gt;&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;Ptr&gt; for <a class=\"struct\" href=\"arrow_array/array/primitive_array/struct.PrimitiveArray.html\" title=\"struct arrow_array::array::primitive_array::PrimitiveArray\">PrimitiveArray</a>&lt;T&gt;"],["impl&lt;'a, Ptr, T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteArrayType.html\" title=\"trait arrow_array::types::ByteArrayType\">ByteArrayType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&amp;'a <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Ptr&gt;&gt; for <a class=\"struct\" href=\"arrow_array/array/byte_array/struct.GenericByteArray.html\" title=\"struct arrow_array::array::byte_array::GenericByteArray\">GenericByteArray</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    Ptr: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteArrayType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteArrayType::Native\">Native</a>&gt; + 'a,</span>"],["impl&lt;'a, T: <a class=\"trait\" href=\"arrow_array/types/trait.ArrowDictionaryKeyType.html\" title=\"trait arrow_array::types::ArrowDictionaryKeyType\">ArrowDictionaryKeyType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; for <a class=\"struct\" href=\"arrow_array/array/dictionary_array/struct.DictionaryArray.html\" title=\"struct arrow_array::array::dictionary_array::DictionaryArray\">DictionaryArray</a>&lt;T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"arrow_array/types/trait.ArrowDictionaryKeyType.html\" title=\"trait arrow_array::types::ArrowDictionaryKeyType\">ArrowDictionaryKeyType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"arrow_array/array/dictionary_array/struct.DictionaryArray.html\" title=\"struct arrow_array::array::dictionary_array::DictionaryArray\">DictionaryArray</a>&lt;T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt; for <a class=\"struct\" href=\"arrow_array/array/run_array/struct.RunArray.html\" title=\"struct arrow_array::array::run_array::RunArray\">RunArray</a>&lt;T&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"arrow_array/types/trait.RunEndIndexType.html\" title=\"trait arrow_array::types::RunEndIndexType\">RunEndIndexType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"arrow_array/array/run_array/struct.RunArray.html\" title=\"struct arrow_array::array::run_array::RunArray\">RunArray</a>&lt;T&gt;"]],
"arrow_buffer":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"arrow_buffer/buffer/immutable/struct.Buffer.html\" title=\"struct arrow_buffer::buffer::immutable::Buffer\">Buffer</a>"],["impl&lt;T: <a class=\"trait\" href=\"arrow_buffer/native/trait.ArrowNativeType.html\" title=\"trait arrow_buffer::native::ArrowNativeType\">ArrowNativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"arrow_buffer/buffer/mutable/struct.MutableBuffer.html\" title=\"struct arrow_buffer::buffer::mutable::MutableBuffer\">MutableBuffer</a>"],["impl&lt;T: <a class=\"trait\" href=\"arrow_buffer/native/trait.ArrowNativeType.html\" title=\"trait arrow_buffer::native::ArrowNativeType\">ArrowNativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"arrow_buffer/buffer/scalar/struct.ScalarBuffer.html\" title=\"struct arrow_buffer::buffer::scalar::ScalarBuffer\">ScalarBuffer</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"arrow_buffer/native/trait.ArrowNativeType.html\" title=\"trait arrow_buffer::native::ArrowNativeType\">ArrowNativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"arrow_buffer/builder/struct.BufferBuilder.html\" title=\"struct arrow_buffer::builder::BufferBuilder\">BufferBuilder</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"arrow_buffer/buffer/mutable/struct.MutableBuffer.html\" title=\"struct arrow_buffer::buffer::mutable::MutableBuffer\">MutableBuffer</a>"],["impl&lt;T: <a class=\"trait\" href=\"arrow_buffer/native/trait.ArrowNativeType.html\" title=\"trait arrow_buffer::native::ArrowNativeType\">ArrowNativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;T&gt; for <a class=\"struct\" href=\"arrow_buffer/buffer/immutable/struct.Buffer.html\" title=\"struct arrow_buffer::buffer::immutable::Buffer\">Buffer</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"arrow_buffer/buffer/null/struct.NullBuffer.html\" title=\"struct arrow_buffer::buffer::null::NullBuffer\">NullBuffer</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"arrow_buffer/buffer/boolean/struct.BooleanBuffer.html\" title=\"struct arrow_buffer::buffer::boolean::BooleanBuffer\">BooleanBuffer</a>"]],
"arrow_schema":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"arrow_schema/field/struct.Field.html\" title=\"struct arrow_schema::field::Field\">Field</a>&gt; for <a class=\"struct\" href=\"arrow_schema/fields/struct.Fields.html\" title=\"struct arrow_schema::fields::Fields\">Fields</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i8.html\">i8</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"arrow_schema/field/struct.Field.html\" title=\"struct arrow_schema::field::Field\">Field</a>&gt;)&gt; for <a class=\"struct\" href=\"arrow_schema/fields/struct.UnionFields.html\" title=\"struct arrow_schema::fields::UnionFields\">UnionFields</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"arrow_schema/field/struct.Field.html\" title=\"struct arrow_schema::field::Field\">Field</a>&gt;&gt; for <a class=\"struct\" href=\"arrow_schema/fields/struct.Fields.html\" title=\"struct arrow_schema::fields::Fields\">Fields</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"arrow_schema/ffi/flags/struct.Flags.html\" title=\"struct arrow_schema::ffi::flags::Flags\">Flags</a>&gt; for <a class=\"struct\" href=\"arrow_schema/ffi/flags/struct.Flags.html\" title=\"struct arrow_schema::ffi::flags::Flags\">Flags</a>"]],
"parquet":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"parquet/arrow/arrow_reader/selection/struct.RowSelector.html\" title=\"struct parquet::arrow::arrow_reader::selection::RowSelector\">RowSelector</a>&gt; for <a class=\"struct\" href=\"parquet/arrow/arrow_reader/selection/struct.RowSelection.html\" title=\"struct parquet::arrow::arrow_reader::selection::RowSelection\">RowSelection</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()