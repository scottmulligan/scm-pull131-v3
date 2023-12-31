import React from 'react';
import { Meta } from '@storybook/react';

import InformationPageHero from '../../components/NonSitecore/InformationPageHero';

export default {
  title: 'Components/NonSitecore/InformationPageHero',
  component: InformationPageHero,
} as Meta<typeof InformationPageHero>;

export const WithLargerImage = {
  args: {
    params: {
      name: 'InformationPageHero',
    },
    fields: {
      Name: {
        value: 'Fitbit',
      },
      Image: {
        value: {
          src: 'https://playsummit.sitecoresandbox.cloud/api/public/content/fddf681166144085b1aa1bef893fca9b?v=df31289a&t=profile',
          height: 133,
          width: 600,
        },
      },
      FacebookProfileLink: {
        value: 'https://facebook.com/asada',
      },
      TwitterProfileLink: {
        value: 'https://twitter.com/asada',
      },
      InstagramProfileLink: {
        value: 'https://instagram.com/asada',
      },
      LinkedinProfileLink: {
        value: 'https://linkedin.com/asada',
      },
    },
    type: 'vendor',
    qualificative: 'Featured',
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};

export const WithSmallerImage = {
  args: {
    params: {
      name: 'InformationPageHero',
    },
    fields: {
      Name: {
        value: 'Fitbit',
      },
      Image: {
        value: {
          src: '/assets/img/aboutus/fitbit-logo.png',
        },
      },
      FacebookProfileLink: {
        value: 'https://facebook.com/asada',
      },
      TwitterProfileLink: {
        value: 'https://twitter.com/asada',
      },
      InstagramProfileLink: {
        value: 'https://instagram.com/asada',
      },
      LinkedinProfileLink: {
        value: 'https://linkedin.com/asada',
      },
    },
    type: 'vendor',
    qualificative: 'Featured',
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};

export const WithoutSocialIcons = {
  args: {
    params: {
      name: 'InformationPageHero',
    },
    fields: {
      Name: {
        value: 'Fitbit',
      },
      Image: {
        value: {
          src: '/assets/img/aboutus/fitbit-logo.png',
        },
      },
    },
    type: 'vendor',
    qualificative: 'Featured',
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};

export const WithoutQualificative = {
  args: {
    params: {
      name: 'InformationPageHero',
    },
    fields: {
      Name: {
        value: 'Fitbit',
      },
      Image: {
        value: {
          src: '/assets/img/aboutus/fitbit-logo.png',
        },
      },
      FacebookProfileLink: {
        value: 'https://facebook.com/asada',
      },
      TwitterProfileLink: {
        value: 'https://twitter.com/asada',
      },
      InstagramProfileLink: {
        value: 'https://instagram.com/asada',
      },
      LinkedinProfileLink: {
        value: 'https://linkedin.com/asada',
      },
    },
    type: 'vendor',
    qualificative: '',
  },
};

export const WithPremiumQualificative = {
  args: {
    params: {
      name: 'InformationPageHero',
    },
    fields: {
      Name: {
        value: 'Fitbit',
      },
      Image: {
        value: {
          src: '/assets/img/aboutus/fitbit-logo.png',
        },
      },
      FacebookProfileLink: {
        value: 'https://facebook.com/asada',
      },
      TwitterProfileLink: {
        value: 'https://twitter.com/asada',
      },
      InstagramProfileLink: {
        value: 'https://instagram.com/asada',
      },
      LinkedinProfileLink: {
        value: 'https://linkedin.com/asada',
      },
    },
    type: 'vendor',
    qualificative: 'premium',
  },
};

export const WithFeaturedQualificative = {
  args: {
    params: {
      name: 'InformationPageHero',
    },
    fields: {
      Name: {
        value: 'Fitbit',
      },
      Image: {
        value: {
          src: '/assets/img/aboutus/fitbit-logo.png',
        },
      },
      FacebookProfileLink: {
        value: 'https://facebook.com/asada',
      },
      TwitterProfileLink: {
        value: 'https://twitter.com/asada',
      },
      InstagramProfileLink: {
        value: 'https://instagram.com/asada',
      },
      LinkedinProfileLink: {
        value: 'https://linkedin.com/asada',
      },
    },
    type: 'vendor',
    qualificative: 'featured',
  },
};

export const WithPlatinumQualificative = {
  args: {
    params: {
      name: 'InformationPageHero',
    },
    fields: {
      Name: {
        value: 'Fitbit',
      },
      Image: {
        value: {
          src: '/assets/img/aboutus/fitbit-logo.png',
        },
      },
      FacebookProfileLink: {
        value: 'https://facebook.com/asada',
      },
      TwitterProfileLink: {
        value: 'https://twitter.com/asada',
      },
      InstagramProfileLink: {
        value: 'https://instagram.com/asada',
      },
      LinkedinProfileLink: {
        value: 'https://linkedin.com/asada',
      },
    },
    type: 'vendor',
    qualificative: 'platinum',
  },
};

export const WithGoldQualificative = {
  args: {
    params: {
      name: 'InformationPageHero',
    },
    fields: {
      Name: {
        value: 'Fitbit',
      },
      Image: {
        value: {
          src: '/assets/img/aboutus/fitbit-logo.png',
        },
      },
      FacebookProfileLink: {
        value: 'https://facebook.com/asada',
      },
      TwitterProfileLink: {
        value: 'https://twitter.com/asada',
      },
      InstagramProfileLink: {
        value: 'https://instagram.com/asada',
      },
      LinkedinProfileLink: {
        value: 'https://linkedin.com/asada',
      },
    },
    type: 'vendor',
    qualificative: 'gold',
  },
};

export const WithSilverQualificative = {
  args: {
    params: {
      name: 'InformationPageHero',
    },
    fields: {
      Name: {
        value: 'Fitbit',
      },
      Image: {
        value: {
          src: '/assets/img/aboutus/fitbit-logo.png',
        },
      },
      FacebookProfileLink: {
        value: 'https://facebook.com/asada',
      },
      TwitterProfileLink: {
        value: 'https://twitter.com/asada',
      },
      InstagramProfileLink: {
        value: 'https://instagram.com/asada',
      },
      LinkedinProfileLink: {
        value: 'https://linkedin.com/asada',
      },
    },
    type: 'vendor',
    qualificative: 'silver',
  },
};

export const WithoutInformations = {
  args: {
    params: {
      name: 'InformationPageHero',
    },
    fields: {
      Name: {
        value: 'Fitbit',
      },
      Image: {
        value: {
          src: '/assets/img/aboutus/fitbit-logo.png',
        },
      },
      FacebookProfileLink: {
        value: 'https://facebook.com/asada',
      },
      TwitterProfileLink: {
        value: 'https://twitter.com/asada',
      },
      InstagramProfileLink: {
        value: 'https://instagram.com/asada',
      },
      LinkedinProfileLink: {
        value: 'https://linkedin.com/asada',
      },
    },
    type: 'vendor',
    qualificative: '',
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};

export const WithEmptyInformations = {
  args: {
    params: {
      name: 'InformationPageHero',
    },
    fields: {
      Name: {
        value: 'Fitbit',
      },
      Image: {
        value: {
          src: '/assets/img/aboutus/fitbit-logo.png',
        },
      },
      FacebookProfileLink: {
        value: 'https://facebook.com/asada',
      },
      TwitterProfileLink: {
        value: 'https://twitter.com/asada',
      },
      InstagramProfileLink: {
        value: 'https://instagram.com/asada',
      },
      LinkedinProfileLink: {
        value: 'https://linkedin.com/asada',
      },
    },
    type: 'vendor',
    qualificative: '',
    informations: <></>,
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};

export const WithInformations = {
  args: {
    params: {
      name: 'InformationPageHero',
    },
    fields: {
      Name: {
        value: 'Fitbit',
      },
      Image: {
        value: {
          src: '/assets/img/aboutus/fitbit-logo.png',
        },
      },
      FacebookProfileLink: {
        value: 'https://facebook.com/asada',
      },
      TwitterProfileLink: {
        value: 'https://twitter.com/asada',
      },
      InstagramProfileLink: {
        value: 'https://instagram.com/asada',
      },
      LinkedinProfileLink: {
        value: 'https://linkedin.com/asada',
      },
    },
    type: 'vendor',
    qualificative: '',
    informations: (
      <>
        <div>
          <span className="label">Job Title:</span> <span>Value</span>
        </div>
        <div>
          <span className="label">Company:</span> <span>Value</span>
        </div>
        <div>
          <span className="label">Location:</span> <span>Value</span>
        </div>
      </>
    ),
    rendering: {
      componentName: 'Rendering',
      dataSource: '/AnythingForTheWithDatasourceCheckHocToDisplayTheComponent',
    },
  },
};
