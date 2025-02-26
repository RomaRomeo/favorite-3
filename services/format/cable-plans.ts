export function formatCablePlans(plans: IResponseCablePlans[]): CablePlans[] {
    return plans.map((plan) => {  
      return {
        name: plan.name,
        description: plan.description,
        price: plan.price,
        speed: plan.speed,
        features: plan.features,
        category: plan.category,
        isRecommended: plan.isRecommended,
      };
    });
  }
  