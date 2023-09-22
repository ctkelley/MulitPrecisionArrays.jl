#
# MPEArray factorization for GMRES-IR
#
struct MPGEFact
    AH::Array
    AL::Array
    AF::Factorization
    VStore:: Array
    KStore:: NTuple
    residual::Vector
end

struct MPHArray
    AH::Array
    AStore::Array
    AL::Array
    residual::Vector
end

struct MPHFact
    AH::Array
    AL::Array
    AF::Factorization
    residual::Vector
end

#
# Heavy factorization for GMRES-IR
#
struct MPGHFact
    AH::Array
    AL::Array
    AF::Factorization
    VStore:: Array
    KStore:: NTuple
    residual::Vector
end

function MPHArray(AH::Array{Float64,2}; TL = Float32)
    AStore = copy(AH)
    AL = TL.(AH)
    (m,n)=size(AH); res=ones(eltype(AH),n)
    MPH = MPHArray(AH, AStore, AL, res)
end

function MPHArray(AH::Array{Float32,2}; TL = Float16)
    AStore = copy(AH)
    AL = TL.(AH)
    (m,n)=size(AH); res=ones(eltype(AH),n)
    MPH = MPHArray(AH, AStore, AL, res)
end
