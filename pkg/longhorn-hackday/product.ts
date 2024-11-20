// this is the definition of a "blank cluster" for Rancher Dashboard
// definition of a "blank cluster" in Rancher Dashboard
const BLANK_CLUSTER = '_';

export function init($plugin:any, store:any) {
  const YOUR_PRODUCT_NAME = 'longhorn-hackday';
  const LH_UI = 'Dashboard';

  const LH_NODES = 'longhorn.io.node';
  const LH_VOLUMES = 'longhorn.io.volume';
  const LH_BACKUPS = 'longhorn.io.backup';
  const LH_BACKUP_TARGETS = 'longhorn.io.backuptarget';
  const LH_BACKING_IMAGES = 'longhorn.io.backingimage';
  const LH_SNAPSHOTS = 'longhorn.io.snapshot';
  const LH_SETTINGS = 'longhorn.io.setting';

  const LHs = [LH_NODES, LH_VOLUMES, LH_BACKUPS, LH_BACKUP_TARGETS, LH_BACKING_IMAGES, LH_SNAPSHOTS, LH_SETTINGS];

  const {
    product,
    configureType,
    virtualType,
    basicType
  } = $plugin.DSL(store, YOUR_PRODUCT_NAME);

  // registering a top-level product
  product({
    icon:    'longhorn',
    inStore: 'cluster',
    weight:  100,
    to:      {
      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ LH_UI }`,
      params: {
        product: YOUR_PRODUCT_NAME,
        cluster: BLANK_CLUSTER
      }
    }
  });

  for (let i = 0 ; i < LHs.length; i++) {
    const page = LHs[i];

    configureType(page, {
      displayName: page,
      isCreatable: true,
      isEditable:  true,
      isRemovable: true,
      showAge:     true,
      showState:   true,
      canYaml:     true,
      customRoute: {
        name:   `${ YOUR_PRODUCT_NAME }-c-cluster-resource`,
        params: {
          product:  YOUR_PRODUCT_NAME,
          cluster:  BLANK_CLUSTER,
          resource: page
        }
      }
    });
  }

  // creating a custom page
  virtualType({
    labelKey: 'longhorn-ui',
    name:     LH_UI,
    weight:   100,
    route:    {
      name:   `${ YOUR_PRODUCT_NAME }-c-cluster-${ LH_UI }`,
      params: {
        product: YOUR_PRODUCT_NAME,
        cluster: BLANK_CLUSTER
      }
    }
  });
  // registering the defined pages as side-menu entries
  basicType([...LHs, LH_UI]);
}
