var documenterSearchIndex = {"docs":
[{"location":"functions/mplu!/#mplu!:-Simple-MPArray-factorization","page":"mplu!: Simple MPArray factorization","title":"mplu!: Simple MPArray factorization","text":"","category":"section"},{"location":"functions/mplu!/","page":"mplu!: Simple MPArray factorization","title":"mplu!: Simple MPArray factorization","text":"mplu!(MPA::MPArray)","category":"page"},{"location":"functions/mplu!/#MultiPrecisionArrays.mplu!-Tuple{MPArray}","page":"mplu!: Simple MPArray factorization","title":"MultiPrecisionArrays.mplu!","text":"mplu!(MPA::MPArray)\n\nPlain vanilla MPArray factorization.\n\nThe story on interprecision transfers is that \n\nMPLFact downcasts the residual before the solve and avoids N^2  interprecision transfers. MPLFact factors MPArrays.\nMPLEFact factors MPEArrays and therefore does interprecision transfers  on the fly and incurs the N^2 interprecision transfer cost for that. \nMPLEFact is what you must use if you plan to use the low precision  factorization as a preconditioner in IR-GMRES or you're working in  Float16 and the matrix is very ill-conditioned. MPLEFact factors  MPEArrays, which know to do interprecision transfers on-the-fly.\n\nThe \n\nUnion{MPArray,MPEArray}\n\nlets me use the onthefly trait to figure out what do to.\n\n\n\n\n\n","category":"method"},{"location":"#MultiPrecisionArrays.jl-v0.0.4","page":"Home","title":"MultiPrecisionArrays.jl v0.0.4","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"C. T. Kelley","category":"page"},{"location":"","page":"Home","title":"Home","text":"MultiPrecisionArrays.jl is a package for iterative refinement. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package provides data atructures and solvers for several variants of iterative refinement. It will become much more useful when half precision (aka Float16) is fully supported in LAPACK/BLAS. For now, it's only general-purpose application is classical iterative refinement with double precision equations and single precision factorizations.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The half precision stuff is good for those of us doing research in this field. Half precision performace has progressed to the point where you can acutally get things done. On an Apple M2-Pro, a half precision LU only costs 3–5 times what a double precision LU costs. This may be as good as it gets unless someone wants to duplicate the LAPACK implementation and get the benefits from blocking, recursion, and clever cache management.","category":"page"},{"location":"","page":"Home","title":"Home","text":"We use a hack-job LU factorization for half precision. Look at the source for hlu!.jl.","category":"page"},{"location":"#What-is-iterative-refinement.","page":"Home","title":"What is iterative refinement.","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The idea is to solve Ax=b in high precision using a factorization in lower precision. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"IR(A, b)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Initialize: x = 0,  r = b\nFactor A = LU in a lower precision\nWhile  r  is too large\nCompute the defect d = (LU)^-1 r\nCorrect the solution x = x + d\nUpdate the residuial r = b - Ax\nend","category":"page"},{"location":"","page":"Home","title":"Home","text":"In Julia, a code to do this would solve the linear system A x = b in double precision by using a factorization in a lower precision, say single, within a residual correction iteration. This means that one would need to allocate storage for a copy of A is the lower precision and factor that copy. The one has to determine what the line d = (LU)^-1 r means. Do you cast r into the lower precison before the solve or not? MultiPrecisionArrays.jl provides data structures and solvers to manage this. The MPArray structure lets you preallocate A and the low precision copy.","category":"page"},{"location":"#Integral-Equations-Example","page":"Home","title":"Integral Equations Example","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The submodule MultiPrecisionArrays.Examples has an example which we will  use for most of the documentation. The function Gmat(N) returns the trapeziod rule discretization of the Greens operator  for -d^2dx^2 on 01","category":"page"},{"location":"","page":"Home","title":"Home","text":"G u(x) = int_0^1 g(xy) u(y)  dy ","category":"page"},{"location":"","page":"Home","title":"Home","text":"where","category":"page"},{"location":"","page":"Home","title":"Home","text":"g(xy) = \n    leftbeginarrayc\n        y (1-x)   x  y\n        x (1-y)   x le y\n    endarrayright","category":"page"},{"location":"","page":"Home","title":"Home","text":"The code for this is in the /src/Examples directory.  The file is Gmat.jl.","category":"page"},{"location":"functions/hlu!/#hlu!:-Get-LU-to-perform-reasonably-well-for-Float16","page":"hlu!: Get LU to perform reasonably well for Float16","title":"hlu!: Get LU to perform reasonably well for Float16","text":"","category":"section"},{"location":"functions/hlu!/","page":"hlu!: Get LU to perform reasonably well for Float16","title":"hlu!: Get LU to perform reasonably well for Float16","text":"hlu!(A::Matrix{T}) where{T}","category":"page"},{"location":"functions/hlu!/#MultiPrecisionArrays.hlu!-Union{Tuple{Matrix{T}}, Tuple{T}} where T","page":"hlu!: Get LU to perform reasonably well for Float16","title":"MultiPrecisionArrays.hlu!","text":"hlu!(A::Matrix{T}) where {T} Return LU factorization of A\n\nC. T. Kelley, 2023\n\nThis function is a hack of generic_lufact! which is part of\n\nhttps://github.com/JuliaLang/julia/blob/master/stdlib/LinearAlgebra/src/lu.jl\n\nI \"fixed\" the code to be Float16 only and fixed pivoting to only MaxRow.\n\nAll I did in the factorization was thread the critical loop with Polyester.@batch and put @simd in the inner loop. These changes got me a 10x speedup on my Mac M2 Pro with 8 performance cores. I'm happy.\n\n\n\n\n\n","category":"method"}]
}
