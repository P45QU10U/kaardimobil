// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import store from './store'
import offers from './offers'
import socialnetwork from './socialnetwork'
import categoryservices from './service-category'
import serviceVariant from './service-prices'
import services from './service'
import openingdays from './opening_days'
import openinghours from './opening_hours'
import interventioncosts from './interventionCosts'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    store, offers, socialnetwork, categoryservices, serviceVariant, services, openingdays, openinghours, interventioncosts
  ]),
})
