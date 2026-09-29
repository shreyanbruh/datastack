# Installing Blender

Steps to install the current **LTS (Long-Term Support)** version of Blender —
always use LTS for this project, not the latest bleeding-edge release, since
it gets 2 years of stability and bug fixes instead of frequent breaking
changes.

## Step-by-step install

**1. Go to the official LTS download page**

Don't just Google "download Blender" — go straight to Blender's own LTS
page so you always get the supported long-term release:

```
https://www.blender.org/download/lts/
```

**2. Download for your OS**

=== "Windows"

    Click **Windows Installer** under the current LTS release (currently
    **Blender 5.2 LTS**). Run the downloaded `.msi` file and follow the
    install wizard — defaults are fine for everyone.

=== "macOS"

    Click **macOS (Apple Silicon)** under the current LTS release. Open the
    downloaded `.dmg` file, then drag the Blender icon into your
    **Applications** folder.

=== "Linux"

    Download the `.tar.xz` archive, extract it, and run the `blender`
    executable inside — no install step required. (Or use your
    distro's package manager / the Snap Store build if you prefer
    automatic updates.)

**3. Launch Blender**

Open it like any other app. The default "Splash Screen" confirms it
installed correctly.

**4. Confirm you're on the right version**

In Blender, go to **Help → About Blender** in the top menu. It should say
something like `5.2.x LTS`. If it just says a plain version number with no
"LTS", you downloaded the wrong build — go back to step 1.

---

## System Requirements

These are Blender's own official minimum and recommended specs for the
current LTS release (Windows and Linux; macOS requires Apple Silicon
regardless of tier).

| Component | Minimum | Recommended |
|---|---|---|
| **OS** | Windows 8.1 (64-bit) / Linux with glibc 2.28+ | Windows 11 |
| **CPU** | 4 cores, SSE4.2 support | 8 cores |
| **RAM** | 8 GB | 32 GB |
| **GPU** | 2 GB VRAM, OpenGL 4.3 / Vulkan 1.3 | 8 GB VRAM |
| **Display** | Any | 1920×1080 or higher |

**macOS:** Apple Silicon required (Blender 5.0+ dropped Intel Mac support).
Minimum OS is macOS 13 Ventura; macOS 26 Tahoe is recommended. RAM
requirements match the table above (8 GB minimum, 32 GB recommended).

!!! tip "Don't have the recommended specs?"
    You can still model, texture, and animate fine below the recommended
    tier — you'll mainly notice slower viewport performance on complex
    scenes and longer render times. The minimum spec is a real floor, not
    a suggestion: Blender genuinely will not run below it.
