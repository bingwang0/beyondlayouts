public with sharing class visibilityController {

    /* note: cacheable=true is required - otherwise wire service doesn't work (but without any error) */
    @AuraEnabled(cacheable=true)
    public static Id beVisible(Id accountId){  //returning a parent id if it has a different ownership
        Account acct = [SELECT Id, Ownership, ParentId, Parent.Ownership FROM Account Where Id = :accountId];
        if (acct.Parent.ownership != acct.Ownership) return acct.ParentId;
        return null;
    }

}
