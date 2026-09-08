import { render } from '@testing-library/react';

import { TooltipProvider } from '@/common/components/ui/tooltip';
import { ModelSelector } from '@/features/model-selector';

describe('ModelSelector feature', () => {
  it('mounts without crashing', () => {
    render(
      <TooltipProvider>
        <ModelSelector />
      </TooltipProvider>
    );
  });
});
