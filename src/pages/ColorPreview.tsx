import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ColorPreview = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold gradient-text-hero">
            Blue & Purple Color Palette
          </h1>
          <p className="text-xl text-muted-foreground">
            Premium, modern, and conversion-optimized design system
          </p>
        </div>

        {/* Primary Colors */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Primary Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-8 space-y-4">
              <div className="h-32 bg-primary rounded-lg shadow-glow-blue"></div>
              <div>
                <h3 className="font-bold text-lg">Electric Blue</h3>
                <p className="text-sm text-muted-foreground">Main brand color - vibrant, energetic</p>
                <code className="text-xs">hsl(217 91% 60%)</code>
              </div>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="h-32 bg-secondary rounded-lg shadow-glow-purple"></div>
              <div>
                <h3 className="font-bold text-lg">Royal Purple</h3>
                <p className="text-sm text-muted-foreground">Premium, sophisticated</p>
                <code className="text-xs">hsl(262 83% 58%)</code>
              </div>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="h-32 bg-accent rounded-lg shadow-glow-violet"></div>
              <div>
                <h3 className="font-bold text-lg">Bright Purple</h3>
                <p className="text-sm text-muted-foreground">Eye-catching, premium accent</p>
                <code className="text-xs">hsl(280 87% 65%)</code>
              </div>
            </Card>
          </div>
        </section>

        {/* Highlight Color */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Highlight Color</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 space-y-4">
              <div className="h-32 bg-highlight rounded-lg shadow-glow-cyan"></div>
              <div>
                <h3 className="font-bold text-lg">Cyan Blue</h3>
                <p className="text-sm text-muted-foreground">For stats, CTAs, and emphasis</p>
                <code className="text-xs">hsl(199 89% 48%)</code>
              </div>
            </Card>
          </div>
        </section>

        {/* Gradients */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Gradient System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 space-y-4">
              <div className="h-32 bg-gradient-primary rounded-lg"></div>
              <div>
                <h3 className="font-bold text-lg">Primary Gradient</h3>
                <p className="text-sm text-muted-foreground">Electric Blue → Royal Purple</p>
              </div>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="h-32 bg-gradient-accent rounded-lg"></div>
              <div>
                <h3 className="font-bold text-lg">Accent Gradient</h3>
                <p className="text-sm text-muted-foreground">Royal Purple → Bright Purple</p>
              </div>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="h-32 bg-gradient-hero rounded-lg"></div>
              <div>
                <h3 className="font-bold text-lg">Hero Gradient</h3>
                <p className="text-sm text-muted-foreground">Blue → Royal Purple → Bright Purple</p>
              </div>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="h-32 bg-gradient-warm rounded-lg"></div>
              <div>
                <h3 className="font-bold text-lg">Cool Gradient</h3>
                <p className="text-sm text-muted-foreground">Cyan Blue → Electric Blue</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Gradient Text */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Gradient Text</h2>
          <div className="space-y-6 text-center">
            <h1 className="text-6xl font-bold gradient-text-primary">
              Blue to Purple Gradient
            </h1>
            <h1 className="text-6xl font-bold gradient-text-accent">
              Purple Gradient Text
            </h1>
            <h1 className="text-6xl font-bold gradient-text-hero">
              Premium Hero Gradient
            </h1>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Button Styles</h2>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="btn-primary-glow">
              Blue Primary Glow
            </Button>
            <Button size="lg" className="btn-secondary-glow">
              Purple Secondary Glow
            </Button>
            <Button size="lg" className="btn-accent-glow">
              Bright Accent Glow
            </Button>
            <Button size="lg" className="btn-highlight-glow">
              Cyan Highlight Glow
            </Button>
            <Button size="lg" variant="outline">
              Outline
            </Button>
          </div>
        </section>

        {/* Glass Effects */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Glass Morphism</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 bg-gradient-primary rounded-lg p-8 flex items-center justify-center">
              <div className="glass p-8 rounded-lg">
                <h3 className="font-bold text-2xl">Light Glass Effect</h3>
                <p className="text-muted-foreground">Backdrop blur with transparency</p>
              </div>
            </div>
            <div className="relative h-64 bg-gradient-accent rounded-lg p-8 flex items-center justify-center">
              <div className="glass-dark p-8 rounded-lg text-white">
                <h3 className="font-bold text-2xl">Dark Glass Effect</h3>
                <p className="text-stone-200">Perfect for overlay elements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Animations */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Animations</h2>
          <div className="flex flex-wrap gap-8 justify-center">
            <Card className="p-8 w-64">
              <div className="h-24 w-24 bg-primary rounded-full mx-auto animate-float shadow-glow-blue"></div>
              <p className="text-center mt-4 font-medium">Float Animation</p>
            </Card>
            <Card className="p-8 w-64">
              <div className="h-24 w-24 bg-secondary rounded-full mx-auto animate-pulse-glow shadow-glow-purple"></div>
              <p className="text-center mt-4 font-medium">Pulse Glow</p>
            </Card>
            <Card className="p-8 w-64">
              <div className="h-24 w-24 bg-accent rounded-full mx-auto animate-pulse-glow shadow-glow-violet"></div>
              <p className="text-center mt-4 font-medium">Accent Pulse</p>
            </Card>
            <Card className="p-8 w-64">
              <div className="h-24 w-24 bg-highlight rounded-full mx-auto animate-bounce shadow-glow-cyan"></div>
              <p className="text-center mt-4 font-medium">Bounce</p>
            </Card>
          </div>
        </section>

        {/* Cards with Shadows */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Card Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-8 hover:shadow-glow-blue transition-all duration-300 cursor-pointer">
              <div className="h-12 w-12 bg-primary rounded-lg mb-4"></div>
              <h3 className="font-bold text-xl mb-2">Blue Glow</h3>
              <p className="text-muted-foreground">Hover to see glow</p>
            </Card>
            <Card className="p-8 hover:shadow-glow-purple transition-all duration-300 cursor-pointer">
              <div className="h-12 w-12 bg-secondary rounded-lg mb-4"></div>
              <h3 className="font-bold text-xl mb-2">Purple Glow</h3>
              <p className="text-muted-foreground">Hover to see glow</p>
            </Card>
            <Card className="p-8 hover:shadow-glow-violet transition-all duration-300 cursor-pointer">
              <div className="h-12 w-12 bg-accent rounded-lg mb-4"></div>
              <h3 className="font-bold text-xl mb-2">Violet Glow</h3>
              <p className="text-muted-foreground">Hover to see glow</p>
            </Card>
            <Card className="p-8 hover:shadow-glow-cyan transition-all duration-300 cursor-pointer">
              <div className="h-12 w-12 bg-highlight rounded-lg mb-4"></div>
              <h3 className="font-bold text-xl mb-2">Cyan Glow</h3>
              <p className="text-muted-foreground">Hover to see glow</p>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Typography Scale</h2>
          <Card className="p-8 space-y-4">
            <h1 className="text-6xl font-bold">Heading 1 - 6xl</h1>
            <h2 className="text-5xl font-bold">Heading 2 - 5xl</h2>
            <h3 className="text-4xl font-bold">Heading 3 - 4xl</h3>
            <h4 className="text-3xl font-bold">Heading 4 - 3xl</h4>
            <h5 className="text-2xl font-bold">Heading 5 - 2xl</h5>
            <h6 className="text-xl font-bold">Heading 6 - xl</h6>
            <p className="text-lg">Large paragraph - lg</p>
            <p className="text-base">Base paragraph - base</p>
            <p className="text-sm text-muted-foreground">Small text - sm</p>
            <p className="text-xs text-muted-foreground">Extra small - xs</p>
          </Card>
        </section>

        {/* Real-world Example */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Real-World Example</h2>
          <div className="bg-gradient-hero rounded-2xl p-12 text-white">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold mb-6">
                Sell Where Your Customers Are
              </h1>
              <p className="text-2xl mb-8 text-white/90">
                One platform. Every chat channel. Shopify synced. Revenue multiplied.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover:shadow-xl transition-all duration-300">
                  Start Selling on Chat
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  See the Roadmap
                </Button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ColorPreview;
