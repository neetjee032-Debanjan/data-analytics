export const discreteFourierTransformLesson = {
  id: "l47",

  title: "Discrete Fourier Transform (DFT)",

  pages: [

    {
      title: "1. Why We Need DFT",
      content: `
The Continuous Fourier Transform assumes signals exist continuously over time.

Computers cannot store or process continuous signals.

Instead, computers work with:

• Samples
• Finite memory
• Discrete values

Therefore a discrete version of Fourier analysis is needed.

This leads to the Discrete Fourier Transform (DFT).

DFT is the foundation of modern Digital Signal Processing (DSP).
`
    },

    {
      title: "2. Sampling Signals",
      content: `
Real-world signals are converted into samples.

Example:

Continuous Signal:

x(t)

Sampled Signal:

x[0], x[1], x[2], ..., x[N−1]

Each sample represents the signal at a specific instant.

The DFT analyzes these samples.
`
    },

    {
      title: "3. Finite Length Signals",
      content: `
Unlike the Continuous Fourier Transform:

DFT works on a finite number of samples.

If we collect:

N samples

then DFT produces:

N frequency components.

This makes DFT suitable for computer implementation.
`
    },

    {
      title: "4. DFT Formula",
      content: `
The Discrete Fourier Transform is:

X[k] =
Σ x[n] e^(-j2πkn/N)

where:

n = time index

k = frequency index

N = number of samples

X[k] = frequency-domain value

This equation transforms discrete time data into discrete frequency data.
`
    },

    {
      title: "5. Meaning of X[k]",
      content: `
Each value X[k] represents a specific frequency component.

It tells us:

• Frequency strength
• Frequency phase
• Contribution to the signal

The complete set:

X[0], X[1], ..., X[N−1]

forms the frequency spectrum.
`
    },

    {
      title: "6. Frequency Bins",
      content: `
DFT frequencies are called bins.

Bin 0:

DC Component

Bin 1:

First frequency

Bin 2:

Second frequency

...

Bin N−1:

Highest represented frequency

Each bin corresponds to a specific frequency range.
`
    },

    {
      title: "7. DC Component",
      content: `
X[0] is called the DC component.

It represents:

Average signal value

If the signal oscillates around zero:

DC ≈ 0

If the signal has an offset:

DC becomes significant.
`
    },

    {
      title: "8. Complex Output",
      content: `
DFT outputs complex numbers.

Each value contains:

Real Part

Imaginary Part

These components encode:

• Magnitude
• Phase

Both are necessary for complete signal reconstruction.
`
    },

    {
      title: "9. Magnitude Spectrum",
      content: `
Magnitude is:

|X[k]|

It indicates the strength of each frequency.

Large magnitude:

Strong frequency component.

Small magnitude:

Weak frequency component.
`
    },

    {
      title: "10. Phase Spectrum",
      content: `
Phase is:

∠X[k]

It indicates timing shifts of frequencies.

Many applications require both magnitude and phase information.

Ignoring phase can significantly distort reconstructed signals.
`
    },

    {
      title: "11. Example Signal",
      content: `
Suppose:

x[n] =
sin(2πf₁n)
+
sin(2πf₂n)

The DFT spectrum will show peaks at:

f₁

and

f₂

This allows automatic identification of hidden frequencies.
`
    },

    {
      title: "12. Frequency Resolution",
      content: `
Frequency Resolution determines how closely frequencies can be distinguished.

Resolution:

Δf = Fs/N

where:

Fs = Sampling Frequency

N = Number of Samples

Larger N gives better frequency resolution.
`
    },

    {
      title: "13. Nyquist Frequency",
      content: `
The highest frequency detectable is:

Nyquist Frequency

fN = Fs/2

Any frequency above Nyquist causes aliasing.

This is a fundamental limitation of sampling systems.
`
    },

    {
      title: "14. Aliasing",
      content: `
Aliasing occurs when sampling frequency is too low.

High frequencies appear as incorrect lower frequencies.

This creates distortion.

To avoid aliasing:

Fs > 2 × Highest Signal Frequency

This is the Nyquist Sampling Theorem.
`
    },

    {
      title: "15. Inverse DFT",
      content: `
The DFT is reversible.

Inverse DFT:

x[n] =
(1/N)
Σ X[k] e^(j2πkn/N)

Using the inverse transform, the original signal can be reconstructed.
`
    },

    {
      title: "16. Computational Challenge",
      content: `
Direct DFT computation requires:

N² operations

For large datasets this becomes expensive.

Example:

N = 10000

Requires approximately:

100 million calculations

This motivates a faster algorithm.
`
    },

    {
      title: "17. Birth of FFT",
      content: `
To accelerate DFT computation:

Fast Fourier Transform (FFT)

was developed.

FFT computes the same result as DFT but dramatically faster.

FFT revolutionized digital signal processing.
`
    },

    {
      title: "18. Applications",
      content: `
DFT is used in:

• Audio Analysis
• Image Processing
• Radar
• Medical Imaging
• Telecommunications
• Seismology
• Speech Recognition

It is one of the most widely used algorithms in engineering.
`
    },

    {
      title: "19. Relationship to CFT",
      content: `
Continuous Fourier Transform:

Continuous signals

↓

Sampling

↓

Discrete Fourier Transform

DFT is essentially a numerical approximation of the Continuous Fourier Transform.
`
    },

    {
      title: "20. Summary",
      content: `
Key Concepts:

• Sampling
• Discrete signals
• Frequency bins
• Magnitude spectrum
• Phase spectrum
• Nyquist frequency
• Aliasing
• Inverse DFT

The Discrete Fourier Transform forms the mathematical core of digital signal processing and prepares us for the Fast Fourier Transform (FFT).
`
    }

  ]
};
