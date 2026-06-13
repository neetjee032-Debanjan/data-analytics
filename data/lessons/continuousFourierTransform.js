export const continuousFourierTransformLesson = {
  id: "l46",

  title: "Continuous Fourier Transform (CFT)",

  pages: [

    {
      title: "1. Why Fourier Series Is Not Enough",
      content: `
Fourier Series is extremely powerful for periodic signals.

However, many real-world signals are not periodic.

Examples:

• Speech recordings
• Earthquakes
• ECG measurements
• Radar pulses
• Internet traffic
• Financial market data

These signals do not repeat forever.

A more general tool is needed.

That tool is the Continuous Fourier Transform (CFT).
`
    },

    {
      title: "2. From Periodic to Non-Periodic Signals",
      content: `
Imagine increasing the period of a Fourier Series indefinitely.

Period:

T → ∞

As the period grows larger, harmonic frequencies become more densely packed.

Eventually the discrete frequencies become a continuous frequency spectrum.

This transition leads naturally to the Continuous Fourier Transform.
`
    },

    {
      title: "3. Fundamental Idea",
      content: `
The Continuous Fourier Transform converts a signal from:

Time Domain

↓

Frequency Domain

Instead of obtaining a set of discrete harmonics, we obtain a continuous frequency spectrum.

This spectrum reveals all frequencies contained within the signal.
`
    },

    {
      title: "4. Continuous Fourier Transform Formula",
      content: `
The Continuous Fourier Transform is:

F(f) =
∫ x(t)e^(-j2πft) dt

Integration occurs over all time.

Input:

x(t)

Output:

F(f)

The output describes how strongly each frequency contributes to the signal.
`
    },

    {
      title: "5. Meaning of Each Symbol",
      content: `
x(t)

Original signal in time domain.

F(f)

Frequency-domain representation.

f

Frequency in Hertz.

j

Imaginary unit.

e^(-j2πft)

Complex sinusoid used to analyze the signal.

Together they allow extraction of frequency information.
`
    },

    {
      title: "6. Complex Exponentials",
      content: `
Using Euler's Formula:

e^(jθ) =
cos(θ) + j sin(θ)

The Fourier Transform simultaneously analyzes:

• Cosine components
• Sine components

This makes the mathematics elegant and compact.
`
    },

    {
      title: "7. Frequency Spectrum",
      content: `
The output F(f) is called the spectrum.

The spectrum tells us:

• Which frequencies exist
• Their amplitudes
• Their phases

Engineers often analyze the spectrum instead of the original signal because it reveals hidden structure.
`
    },

    {
      title: "8. Magnitude Spectrum",
      content: `
The magnitude spectrum is:

|F(f)|

It measures the strength of each frequency.

Large magnitude:

Strong frequency component.

Small magnitude:

Weak frequency component.
`
    },

    {
      title: "9. Phase Spectrum",
      content: `
The phase spectrum is:

∠F(f)

It describes phase shifts of individual frequency components.

Phase information is essential for accurately reconstructing the original signal.
`
    },

    {
      title: "10. Inverse Fourier Transform",
      content: `
The Fourier Transform is reversible.

Given F(f), we can recover x(t).

Inverse Transform:

x(t)=
∫F(f)e^(j2πft)df

No information is lost if the transform is computed exactly.
`
    },

    {
      title: "11. Time Domain vs Frequency Domain",
      content: `
Time Domain:

Shows how signal changes with time.

Frequency Domain:

Shows frequency content.

Both contain identical information.

They are simply different representations of the same signal.
`
    },

    {
      title: "12. Example: Single Sine Wave",
      content: `
Consider:

x(t)=sin(2π50t)

Its Fourier Transform contains one dominant frequency:

50 Hz

The spectrum shows a sharp peak at that frequency.

This demonstrates how CFT identifies signal frequencies.
`
    },

    {
      title: "13. Example: Multiple Frequencies",
      content: `
Suppose:

x(t)=
sin(2π50t)
+
0.5sin(2π120t)

The spectrum contains:

50 Hz peak

120 Hz peak

The Fourier Transform separates the frequencies automatically.
`
    },

    {
      title: "14. Signal Energy",
      content: `
The Fourier Transform helps analyze energy distribution.

Questions such as:

Where is the signal energy concentrated?

Which frequencies dominate?

become easy to answer in frequency space.
`
    },

    {
      title: "15. Parseval's Theorem",
      content: `
Parseval's Theorem states:

Signal energy in time domain

=

Signal energy in frequency domain

Energy is preserved under Fourier transformation.

This property is fundamental in signal processing.
`
    },

    {
      title: "16. Properties of the CFT",
      content: `
Important properties include:

• Linearity
• Time Shifting
• Frequency Shifting
• Scaling
• Convolution
• Differentiation

These properties simplify many engineering calculations.
`
    },

    {
      title: "17. Applications",
      content: `
Continuous Fourier Transform is used in:

• Telecommunications
• Acoustics
• Medical Imaging
• Astronomy
• Seismology
• Radar
• Control Systems

Many technologies depend on frequency-domain analysis.
`
    },

    {
      title: "18. Limitations",
      content: `
The CFT assumes signals exist for infinite time.

Real-world signals are finite.

Direct computation is often impractical.

This motivates:

• Discrete Fourier Transform
• Fast Fourier Transform

which are used in computers.
`
    },

    {
      title: "19. Connection to DFT",
      content: `
Computers cannot process continuous signals exactly.

They use sampled data.

The Discrete Fourier Transform (DFT) approximates the Continuous Fourier Transform using finite samples.

This is the foundation of digital signal processing.
`
    },

    {
      title: "20. Summary",
      content: `
Key Concepts:

• Non-periodic signals
• Continuous frequency spectrum
• Fourier Transform
• Magnitude spectrum
• Phase spectrum
• Inverse Transform
• Parseval's theorem

The Continuous Fourier Transform generalizes Fourier Series and provides the mathematical foundation for modern signal processing.
`
    }

  ]
};
