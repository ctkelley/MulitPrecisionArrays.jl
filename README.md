[![][build-status-img]][build-status-url]
[![][codecov-img]][codecov-url]

# MPArrays.jl v0.0.2

__This package is nowhere close to ready for registration or release. It's public only to help me do CI and clean up the docs.__

__Please do not make PRs. If you stumble on this mess and have questions/ideas ..., raise an issue or email me at tim_kelley@ncsu.edu__

Nothing is in final form and I am changing the API, internal structures, exported functions/structs and all kinds of other stuff frequently. When/if I register this and announce it, then it will be time for complaints and offers to collaborate. 

This is the start of a package to support mulitprecision arrays. This is for my own research right now.

One example is a struct with a Float64 array A and Float32.(A). To do factor/solve you factor the Float32 array and solve with iterative refinement.

I have this working to the point where ```\``` does the right thing.

More later.


[docs-dev-img]: https://img.shields.io/badge/docs-dev-blue.svg
[docs-dev-url]: https://ctkelley.github.io/MPArrays.jl/dev

[build-status-img]: https://github.com/ctkelley/MPArrays.jl/workflows/CI/badge.svg
[build-status-url]: https://github.com/ctkelley/MPArrays.jl/actions

[codecov-img]: https://codecov.io/gh/ctkelley/MPArrays.jl/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/ctkelley/MPArrays.jl

[docs-stable-img]: https://img.shields.io/badge/docs-stable-blue.svg
[docs-stable-url]: https://ctkelley.github.io/MPArrays.jl/stable
