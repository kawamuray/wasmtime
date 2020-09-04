(function() {var implementors = {};
implementors["cranelift_codegen"] = [{"text":"impl Ord for Block","synthetic":false,"types":[]},{"text":"impl Ord for Value","synthetic":false,"types":[]},{"text":"impl Ord for Inst","synthetic":false,"types":[]},{"text":"impl Ord for StackSlot","synthetic":false,"types":[]},{"text":"impl Ord for GlobalValue","synthetic":false,"types":[]},{"text":"impl Ord for Constant","synthetic":false,"types":[]},{"text":"impl Ord for Immediate","synthetic":false,"types":[]},{"text":"impl Ord for JumpTable","synthetic":false,"types":[]},{"text":"impl Ord for FuncRef","synthetic":false,"types":[]},{"text":"impl Ord for SigRef","synthetic":false,"types":[]},{"text":"impl Ord for Heap","synthetic":false,"types":[]},{"text":"impl Ord for Table","synthetic":false,"types":[]},{"text":"impl Ord for AnyEntity","synthetic":false,"types":[]},{"text":"impl Ord for MachLabel","synthetic":false,"types":[]}];
implementors["cranelift_codegen_meta"] = [{"text":"impl Ord for DefIndex","synthetic":false,"types":[]},{"text":"impl Ord for VarIndex","synthetic":false,"types":[]},{"text":"impl Ord for OpcodeNumber","synthetic":false,"types":[]},{"text":"impl Ord for InstructionPredicateNumber","synthetic":false,"types":[]},{"text":"impl Ord for EncodingRecipeNumber","synthetic":false,"types":[]},{"text":"impl Ord for RegBankIndex","synthetic":false,"types":[]},{"text":"impl Ord for RegClassIndex","synthetic":false,"types":[]},{"text":"impl Ord for TransformGroupIndex","synthetic":false,"types":[]}];
implementors["cranelift_entity"] = [{"text":"impl&lt;T:&nbsp;Ord + ReservedValue&gt; Ord for PackedOption&lt;T&gt;","synthetic":false,"types":[]}];
implementors["cranelift_module"] = [{"text":"impl Ord for FuncId","synthetic":false,"types":[]},{"text":"impl Ord for DataId","synthetic":false,"types":[]},{"text":"impl Ord for FuncOrDataId","synthetic":false,"types":[]}];
implementors["cranelift_wasm"] = [{"text":"impl Ord for FuncIndex","synthetic":false,"types":[]},{"text":"impl Ord for DefinedFuncIndex","synthetic":false,"types":[]},{"text":"impl Ord for DefinedTableIndex","synthetic":false,"types":[]},{"text":"impl Ord for DefinedMemoryIndex","synthetic":false,"types":[]},{"text":"impl Ord for DefinedGlobalIndex","synthetic":false,"types":[]},{"text":"impl Ord for TableIndex","synthetic":false,"types":[]},{"text":"impl Ord for GlobalIndex","synthetic":false,"types":[]},{"text":"impl Ord for MemoryIndex","synthetic":false,"types":[]},{"text":"impl Ord for SignatureIndex","synthetic":false,"types":[]},{"text":"impl Ord for DataIndex","synthetic":false,"types":[]},{"text":"impl Ord for ElemIndex","synthetic":false,"types":[]}];
implementors["peepmatic_automata"] = [{"text":"impl Ord for State","synthetic":false,"types":[]}];
implementors["peepmatic_runtime"] = [{"text":"impl Ord for Else","synthetic":false,"types":[]},{"text":"impl Ord for LhsId","synthetic":false,"types":[]}];
implementors["peepmatic_test"] = [{"text":"impl Ord for Instruction","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Ord for Ident","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Ord for Lifetime","synthetic":false,"types":[]}];
implementors["wasmtime_environ"] = [{"text":"impl Ord for EntityIndex","synthetic":false,"types":[]}];
implementors["wiggle_test"] = [{"text":"impl Ord for MemArea","synthetic":false,"types":[]}];
implementors["witx"] = [{"text":"impl Ord for SizeAlign","synthetic":false,"types":[]}];
implementors["yanix"] = [{"text":"impl Ord for FdFlags","synthetic":false,"types":[]},{"text":"impl Ord for AtFlags","synthetic":false,"types":[]},{"text":"impl Ord for Mode","synthetic":false,"types":[]},{"text":"impl Ord for OFlags","synthetic":false,"types":[]},{"text":"impl Ord for PollFlags","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()