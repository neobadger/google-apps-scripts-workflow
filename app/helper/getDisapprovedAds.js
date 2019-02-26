// Sample File - this can be removed to illustrate
// possible file structure and use. Delete as needed.

/** Gets all active disapproved ads form active campaigns,
 * from active ad groups, contained in active campaigns,
 *  and returns an array of `ad` objects. 
 * @returns {Array} - Ad objects
 */
function getDisapprovedAds() {
  const adsIter = AdWordsApp.ads()
    .withCondition('CampaignStatus = ENABLED')
    .withCondition('AdGroupStatus = ENABLED')
    .withCondition('Status = ENABLED')
    .withCondition('ApprovalStatus = DISAPPROVED')
    .get();

  const adCollection = [];

  while (adsIter.hasNext()) {
    const ads = adsIter.next();
    adCollection.push(ads);
  }

  return adCollection;
}
